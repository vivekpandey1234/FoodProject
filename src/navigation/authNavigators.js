import React from 'react';
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from '@react-navigation/native-stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreens from '../screens/authScreens/SignInScreens';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';
const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        // component={}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignInScreens"
        component={SignInScreens}
        //component={true}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    
      <Auth.Screen
          name="RootClientTabs"
          component={RootClientTabs}
          // component={}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />

         <Auth.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          // component={}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        /> 


      <Auth.Screen
          name="RestaurantMapScreen"
          component={RestaurantMapScreen}
          // component={}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />



    </Auth.Navigator>
  );
}
