import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authNavigators';

export default function RootNavigators() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
