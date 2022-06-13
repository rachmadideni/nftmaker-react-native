import React from 'react';
import { Icon } from 'native-base';
import { Button } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import styles from './button.styles';

function AppButton(props) {
  const { colors } = useTheme();
  return (
    <Button
      labelStyle={[styles.label, { ...props.labelStyles }, props.disabled && { color: colors.white }]}
      mode="contained"
      uppercase={false}
      onPress={props.onSubmit}
      loading={props.isLoadingVisible}
      disabled={props.disabled}
      style={[styles.container, { ...props.style }, props.disabled && { backgroundColor: colors.gray6 }]}>
      {props.title} {props.hasNavigate && <Icon name="chevron-right" type="Entypo" style={styles.icon} />}
    </Button>
  );
}

export default AppButton;
