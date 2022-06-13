import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { withTheme } from 'react-native-paper';
import { images, textStyle } from '../../constants';
import styles from './app-header.styles';

function AppHeader(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={{ width: 26 }} />
      <TouchableOpacity style={styles.wallet}>
        <FastImage source={images.wallet_icon} style={styles.walletIcon} resizeMode="contain" />
        <Text style={[textStyle.heading, { color: 'black', marginHorizontal: 10 }]}>{props.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FastImage source={images.settings} style={styles.settingsIcon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

export default withTheme(AppHeader);
