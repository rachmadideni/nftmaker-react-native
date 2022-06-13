import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { Content } from 'native-base';
import { useTranslation } from 'react-i18next';
import styles from './verification.styles';
import { AppButton, Text, ModalContainer } from '../../components';
import { screens } from '../../config';

const CELL_COUNT = 6;

const Verification = (props) => {
  const { signInWith, email, dialCode, mobile } = props.route?.params;
  const [t] = useTranslation();

  const [passCode, setPassCode] = useState('');
  const passcodeRef = useBlurOnFulfill({ passCode, cellCount: CELL_COUNT });
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    passCode,
    setValue: setPassCode,
  });

  const goToCreateAccount = () => {
    props.navigation.navigate(screens.createNEARAccount);
  };

  return (
    <ModalContainer title={t('Verification.title')} indicatorWidth="33%" onPressBack={props.navigation.goBack}>
      <Content contentContainerStyle={styles.mainConatiner}>
        <Text style={styles.descriptionText}>
          {t(signInWith === 'EMAIL' ? 'Verification.email_description' : 'Verification.phone_description')}
        </Text>
        <Text style={styles.emailText}>{signInWith === 'EMAIL' ? email : `${dialCode} ${mobile}`}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLable}>{t('Verification.enter_verification_code')}</Text>
          <CodeField
            {...cellProps}
            ref={passcodeRef}
            value={passCode}
            autoFocus
            onChangeText={setPassCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => {
              return (
                <View
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell, symbol && styles.filledCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  <TextInput style={[styles.inputText, isFocused && styles.focusTextInput]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </TextInput>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            hasNavigate
            title={t('Common.continue')}
            style={styles.buttonContent}
            disabled={passCode.length < 6}
            onSubmit={goToCreateAccount}
          />
        </View>
        <View style={styles.seperator} />
        <Text style={styles.smallText}>{t('Verification.didnot_receive_code')}</Text>
        <Text style={styles.btnText}>
          {t(signInWith === 'EMAIL' ? 'Verification.send_to_different_email' : 'Verification.send_to_different_phone')}
        </Text>
        <Text style={styles.btnText}>{t('Verification.resend_code')}</Text>
      </Content>
    </ModalContainer>
  );
};
export default Verification;
