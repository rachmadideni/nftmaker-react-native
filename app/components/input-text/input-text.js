import React, { useState } from 'react';
import { Icon } from 'native-base';
import { TextInput, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './input-text.styles';

const InputText = ({ label, hasInfoIcon, rightComponent, ...props }) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      {label && (
        <View style={styles.iconRow}>
          <Text style={styles.label}>{label}</Text>
          {hasInfoIcon && <Icon name="info-circle" type="FontAwesome5" style={styles.icon} />}
        </View>
      )}
      <View style={styles.inputRow}>
        <View style={styles.inputContainer}>
          <TextInput
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[styles.input, isFocused && { borderColor: colors.primary }]}
            placeholderTextColor={colors.gray5}
            {...props}
          />
        </View>
        {rightComponent}
      </View>
    </View>
  );
};

export default InputText;
