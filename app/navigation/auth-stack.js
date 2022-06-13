import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import OnBoarding from '../screens/onboarding';
import SignIn from '../screens/signin';
import Verification from '../screens/verification';
import CreateNEARAccount from '../screens/create-NEAR-account';
import WalkThrough from '../screens/walkthrough';
import BottomTabStack from './bottom-tab-stack';

const AuthStack = createStackNavigator();

const modalScreenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  gestureEnabled: true,
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    };
  },
};

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName={screens.onboarding}>
      <AuthStack.Screen name={screens.onboarding} component={OnBoarding} />
      <AuthStack.Screen name={screens.signin} component={SignIn} />

      <AuthStack.Screen name={screens.verification} component={Verification} options={modalScreenOptions} />
      <AuthStack.Screen name={screens.createNEARAccount} component={CreateNEARAccount} options={modalScreenOptions} />

      <AuthStack.Screen name={screens.home} component={BottomTabStack} />
      <AuthStack.Screen name={screens.walkthrough} component={WalkThrough} />
    </AuthStack.Navigator>
  );
}
