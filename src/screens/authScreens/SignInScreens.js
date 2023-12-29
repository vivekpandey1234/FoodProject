import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, ViewBase} from 'react-native';
//import {colors} from 'react-native-elements';
import {colors, parameters, title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
//import {colors} from 'react-native-elements';

export default function SignInScreen({navigation}) {
  const [textInput2focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header
        title="MY ACCOUNT"
        type="arrow-left-bold"
        navigation={navigation}
      />

      <View style={{marginleft: 20, margintop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Registered with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" />
        </View>
      </View>

      <View style={styles.TextInput2}>
        <Animatable.View
          animation={textInput2focused ? '' : 'fadeInLeft'}
          duration={400}>
          <Icon iconStyle={{color: colors.gray3}} name="lock" type="material" />
        </Animatable.View>

        <TextInput
          style={{width: '80%'}}
          placeholder="Password"
          ref={textInput2}
          onFocus={() => {
            setTextInput2Focused(false);
          }}
          onBlur={() => {
            setTextInput2Focused(true);
          }}
        />

        <Animatable.View
          animation={textInput2focused ? '' : 'fadeInLeft'}
          duration={400}>
          <Icon
            iconStyle={{color: colors.gray3}}
            name="visibility-off"
            type="material"
            style={{marginRight: 10}}
          />
        </Animatable.View>
      </View>
      <View style={{marginHorizontal: 20, marginVertical: 15}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
         onPress={()=>{navigation.navigate('DrawerNavigator')}}
         //onPress={()=>{navigation.navigate('RootClientTabs')}}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 1}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: -10}}>
        <SocialIcon
          title="Sign in with facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign in with Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 5, marginLeft: 20}}>
        <Text style={{...styles.text1}}>New on xpressFood ?</Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.gray3,
    fontSize: 15,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86992e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderColor: '#86992e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
