import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { tabIcons } from '../../helpers';
import styles from './bottom-tab.styles';
import { useRoute } from '@react-navigation/native';
import { screens } from '../../config';

function BottomTab(props) {
  const route = useRoute();

  const openModal = () => {
    props.openModal();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => props.navigation.navigate(screens.home)}>
        {route.name === 'Home' && !props.isOpen ? tabIcons.home_active : tabIcons.home_disable}
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={openModal}>
        {props.isOpen ? tabIcons.plus_active : tabIcons.plus_disable}
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => props.navigation.navigate(screens.history)}>
        {route.name === 'History' && !props.isOpen ? tabIcons.transaction_active : tabIcons.transaction_disable}
      </TouchableOpacity>

    </View>
  );
}

export { BottomTab };
