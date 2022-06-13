/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import { Content } from 'native-base';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';
import styles from './signin.styles';
import { images } from '../../constants';
import { AppButton, Touchable, Text, InputText, MobileInputText } from '../../components';
import { screens } from '../../config';

const SignIn = (props) => {
  const { colors } = useTheme();
  const [t] = useTranslation();
  const [tab, setTab] = useState('PHONE');
  const [iso2, setIso2] = useState('us');
  const [dialCode, setDialCode] = useState('+1');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const goToVerification = () => {
    props.navigation.navigate(screens.verification, { signInWith: tab, dialCode, mobile, email });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor={colors.black} />
      <View style={styles.topContainer}>
        <ImageBackground source={images.background} resizeMode="cover" style={styles.backgroundImage}>
          <FastImage source={images.logo} style={styles.logoImage} resizeMode="contain" />
        </ImageBackground>
      </View>
      <Content contentContainerStyle={styles.mainConatiner}>
        <View style={styles.center}>
          <View style={styles.tabContainer}>
            <Touchable onPress={() => setTab('PHONE')} style={tab === 'PHONE' ? styles.activeTab : styles.tab}>
              <Text style={tab === 'PHONE' ? styles.activeTabText : styles.tabText}>{t('SignIn.phone')}</Text>
            </Touchable>
            <Touchable onPress={() => setTab('EMAIL')} style={tab === 'EMAIL' ? styles.activeTab : styles.tab}>
              <Text style={tab === 'EMAIL' ? styles.activeTabText : styles.tabText}>{t('SignIn.email')}</Text>
            </Touchable>
          </View>
        </View>
        <View style={styles.inputContainer}>
          {tab === 'EMAIL' ? (
            <InputText
              placeholder={'Ex. johdoe@gmail.com'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          ) : (
            <MobileInputText
              iso2={iso2}
              dialCode={dialCode}
              onChangeText={setMobile}
              onSelectCountry={(iso2, dialCode) => {
                setIso2(iso2);
                setDialCode(dialCode);
              }}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <AppButton hasNavigate onSubmit={goToVerification} title={t('Common.continue')} />
        </View>
        <Text style={styles.descriptionText}>
          {t('SignIn.temrs_privacy_text')} <Text style={styles.highlight}>{t('SignIn.terms_service')}</Text>{' '}
          {t('SignIn.and')} <Text style={styles.highlight}>{t('SignIn.privacy_policy')}</Text>
        </Text>
        <View style={styles.seperator} />
        <Text style={styles.smallText}>{t('SignIn.already_account')}</Text>
        <Text style={styles.loginToText}>{t('SignIn.login_with_NEARApps')}</Text>
      </Content>
    </View>
  );
};
export default SignIn;
