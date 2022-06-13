import React, { useState } from 'react';
import { View } from 'react-native';
import { Content } from 'native-base';
import { useTranslation } from 'react-i18next';
import styles from './create-NEAR-account.styles';
import { AppButton, Text, ModalContainer, InputText } from '../../components';
import { screens } from '../../config';

const CreateNEARAccount = (props) => {
  const [t] = useTranslation();

  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState('');

  const goToHome = () => {
    props.navigation.navigate(screens.home);
  };

  return (
    <ModalContainer title={t('CreateNEARAppsAccount.title')} indicatorWidth="66%" onPressBack={props.navigation.goBack}>
      <Content contentContainerStyle={styles.mainConatiner}>
        <Text style={styles.descriptionText}>{t('CreateNEARAppsAccount.description')}</Text>
        <View style={styles.inputContainer}>
          <InputText label={t('Common.full_name')} value={name} onChangeText={setName} placeholder={'Ex John Doe'} />
          <View style={styles.input}>
            <InputText
              label={t('Common.account_id')}
              value={accountId}
              onChangeText={setAccountId}
              placeholder={'yourname'}
              rightComponent={
                <View style={styles.inputRightContainer}>
                  <View style={styles.inputTextContainer}>
                    <Text style={styles.inputRightText}>.near</Text>
                  </View>
                </View>
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            hasNavigate
            title={t('OnBoarding.create_account')}
            style={styles.buttonContent}
            // disabled
            onSubmit={goToHome}
          />
        </View>
        <Text style={styles.privacyText}>
          {t('CreateNEARAppsAccount.terms_privacy_text')}{' '}
          <Text style={styles.highlight}>{t('SignIn.terms_service')}</Text> {t('SignIn.and')}{' '}
          <Text style={styles.highlight}>{t('SignIn.privacy_policy')}</Text>
        </Text>
        <View style={styles.seperator} />
        <Text style={styles.smallText}>{t('SignIn.already_account')}</Text>
        <Text style={styles.btnText}>{t('SignIn.login_with_NEARApps')}</Text>
      </Content>
    </ModalContainer>
  );
};
export default CreateNEARAccount;
