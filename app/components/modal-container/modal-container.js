import React from 'react';
import { View } from 'react-native';
import { Text, IconButton } from '..';
import styles from './modal-container.styles';

function ModalContainer({ title, children, indicatorWidth, onPressBack }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{title}</Text>
          <View style={styles.closeIconContainer}>
            <IconButton name="close" type="AntDesign" onPress={onPressBack} />
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {indicatorWidth && <View style={[styles.indicator, { width: indicatorWidth }]} />}
        {children}
      </View>
    </View>
  );
}

export default ModalContainer;
