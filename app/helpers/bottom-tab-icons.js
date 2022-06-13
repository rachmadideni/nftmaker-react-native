import React from 'react';
import FastImage from 'react-native-fast-image';
import { images } from '../constants';
import { theme } from '../theme';

const tabIcons = {
  home_active: <FastImage source={images.home_blue} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
  home_disable: <FastImage source={images.home_black} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
  plus_active: <FastImage source={images.plus_blue} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
  plus_disable: <FastImage source={images.plus_black} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
  transaction_active: <FastImage source={images.transaction_blue} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
  transaction_disable: <FastImage source={images.transaction_black} style={{ width: 24, height: 24, resizeMode: 'contain' }} />,
};

export { tabIcons };
