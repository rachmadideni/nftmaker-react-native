import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTab, Touchable } from '../components';
import { screens } from '../config';
import { images } from '../constants';
import History from '../screens/history';
import Home from '../screens/home';
import MyNFT from '../screens/my-nft';
import { theme } from '../theme';

const BottomTabStack = createBottomTabNavigator();
const { colors } = theme;

export default function TabNavigator(props) {
  const [t, i18n] = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <BottomTabStack.Navigator
        headerMode="none"
        tabBar={(props) => <BottomTab {...props} openModal={onOpen} isOpen={isOpen} />}
        activeColor={'#f0edf6'}
        inactiveColor={'red'}
        barStyle={styles.barStyle}>
        <BottomTabStack.Screen name={screens.home} component={Home} />
        <BottomTabStack.Screen name={screens.myNFT} component={MyNFT} />
        <BottomTabStack.Screen name={screens.history} component={History} />
      </BottomTabStack.Navigator>
      <Modal transparent statusBarTranslucent animationType="fade" visible={isOpen} onRequestClose={onClose} onDismiss={onClose}>
        <Touchable style={styles.modalBackdrop} onPress={onClose}>
          <SafeAreaView style={styles.content}>
            <Touchable onPress={onClose} style={styles.content} />
            <View style={styles.cardWrapper}>
              <View style={styles.modalBackground}>
                <ImageBackground source={images.modal_bg} style={styles.modalBackground} resizeMode="contain">
                  <View style={styles.modalContent}>
                    <Touchable style={styles.bottomBtn} onPress={() => props.navigation.navigate(screens.myNFT)}>
                      <View style={styles.actionIcon}>
                        <Entypo name="plus" color={colors.white} size={24} />
                      </View>
                      <Text style={styles.bottomBtnText}>{t('Common.mint')} NFT</Text>
                    </Touchable>
                    <Touchable style={styles.bottomBtn}>
                      <View style={styles.actionIcon}>
                        <MaterialCommunityIcons name="arrow-top-right" color={colors.white} size={24} />
                      </View>
                      <Text style={styles.bottomBtnText}>{t('Common.send')} NFT</Text>
                    </Touchable>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </SafeAreaView>
        </Touchable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  barStyle: { backgroundColor: '#694fad' },
  content: {
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
  },
  modalContent: {
    backgroundColor: colors.transparent,
    padding: 0,
    borderRadius: 18,
    marginTop: 0,
  },
  cardWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  bottomBtn: {
    padding: 10,
    paddingVertical: 25
  },
  bottomBtnContainer: {
    paddingHorizontal: 40,
    paddingBottom: 8,
  },
  bottomBtnText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '600',
    color: colors.white,
  },
  modalBackground: {
    width: 289,
    height: 156.5,
    marginBottom: 35,
  },
  actionIcon: {
    position: 'absolute',
    left: 30,
    top: 25
  }
});
