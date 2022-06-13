import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import { Touchable } from '..';
import styles from './icon.styles';

function IconButton({ name, type, style, iconStyle, onPress }) {
  return (
    <View style={styles.row}>
      <Touchable onPress={onPress} style={[styles.container, style]}>
        <Icon name={name} type={type} style={[styles.icon, iconStyle]} />
      </Touchable>
    </View>
  );
}

export default IconButton;
