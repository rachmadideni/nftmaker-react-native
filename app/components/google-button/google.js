import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import styles from './google.styles';

function GoogleButton(props) {
  const { colors } = props.theme;
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  const onPress = async () => {

  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={{ color: colors.white }}>{i18('Component.continueWithGoogle')}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default withTheme(GoogleButton);
