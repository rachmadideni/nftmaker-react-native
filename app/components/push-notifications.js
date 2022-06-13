import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useRef } from 'react';
import { withTheme } from 'react-native-paper';
import NotificationPopup from 'react-native-push-notification-popup';

const PushNotification = (props) => {
  const popup = useRef(null);

  useEffect(() => {

  }, []);




  return <NotificationPopup ref={popup} />;
};

export default withTheme(PushNotification);
