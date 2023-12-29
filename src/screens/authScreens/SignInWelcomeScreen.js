import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
//import {colors} from 'react-native-elements';
import {colors, parameters} from '../../global/styles';
import {Button} from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 2, margineBottom: 50}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          //marginTop: getstatusBarHeight(),
          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.buttons,
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
        {/* </View> */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Swiper autoplay={true}>
            <View style={styles.slide1}>
              <Image
                source={require('../../Assets/f1.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide2}>
              <Image
                source={require('../../Assets/f2.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View style={styles.slide3}>
              <Image
                source={require('../../Assets/f3.jpg')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
          </Swiper>
          <View style={{marginHorizontal: 20, marginVertical: 15}}>
            <Button
              title="SIGN IN"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              onPress={() => {
                navigation.navigate('SignInScreens');
              }}
            />
          </View>

          <View style={{marginHorizontal: 20, marginVertical: 15}}>
            <Button
              title="Create an account"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90D6E8',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90D6E8',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90D6E8',
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
    color: colors.gray1,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
