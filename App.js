import 'react-native-gesture-handler';
import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
//import {colors} from 'react-native-elements';
import {colors} from './src/global/styles';
import RootNavigators from './src/navigation/RootNavigators';
// import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
// import SignInScreens from './src/screens/authScreens/SignInScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      {/* <SignInScreens /> */}
      {/* <SignInWelcomeScreen /> */}
      <RootNavigators />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
