import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, View, StatusBar, Modal } from 'react-native';
import { Icon } from 'native-base';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import { useTheme } from '@react-navigation/native';
import styles from './onboarding.styles';
import { images } from '../../constants';
import { AppButton, Touchable, Text, IconButton } from '../../components';
import { screens } from '../../config';

const OnBoarding = (props) => {
  const { colors } = useTheme();
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const goToAccount = () => {
    props.navigation.navigate(screens.signin);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor={colors.black} />
      <View style={styles.topContainer}>
        <ImageBackground source={images.background} style={styles.backgroundImage} />
        <View style={styles.topContent}>
          <FastImage source={images.logo} style={styles.logoImage} resizeMode="contain" />
          <Text style={styles.headerText}>{t('OnBoarding.description')}</Text>
          <View style={styles.menuContainer}>
            <Touchable onPress={onOpen}>
              <Icon name="menu" type="MaterialIcons" style={styles.menuIcon} />
            </Touchable>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>{t('OnBoarding.title1')}</Text> {t('OnBoarding.title2')}
        </Text>
        <FastImage source={images.nft_cards} style={styles.nftImage} resizeMode="contain" />
        <View style={styles.buttonContainer}>
          <AppButton title={t('OnBoarding.create_account')} onSubmit={goToAccount} />
        </View>
        <Text style={styles.privacyText}>
          {t('OnBoarding.privacy_policy')}
          <Text style={styles.privacySubText}> | </Text>
          {t('OnBoarding.terms_service')}
        </Text>
        <Text style={styles.copyrightText}>{t('OnBoarding.copyright')}</Text>
      </View>
      <Modal transparent statusBarTranslucent animationType="fade" visible={isOpen} onRequestClose={onClose}>
        <View style={styles.modalBackdrop}>
          <SafeAreaView style={styles.content}>
            <Touchable onPress={onClose} style={styles.content} />
            <View style={styles.modalContent}>
              <View style={styles.closeContainer}>
                <IconButton name="close" type="AntDesign" onPress={onClose} />
              </View>
              <Touchable style={styles.bottomBtn}>
                <Text style={styles.bottomBtnText}>{t('OnBoarding.about_us')}</Text>
              </Touchable>
              <Touchable style={styles.bottomBtn}>
                <Text style={styles.bottomBtnText}>{t('OnBoarding.contact_us')}</Text>
              </Touchable>
              <View style={styles.bottomBtnContainer}>
                <AppButton hasNavigate title={t('OnBoarding.sign_in')} style={styles.signInBtn} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
};
export default OnBoarding;
