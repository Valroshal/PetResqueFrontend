import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import TopLogo from '../components/TopLogo/TopLogo';
import GlobalButton from '../components/GlobalButton/GlobalButton';
import * as Yup from 'yup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 46,
  } as ViewStyle,
  header: {
    fontSize: 32,
    fontFamily: 'Lato',
    color: '#28230E',
    alignItems: 'center',
  } as TextStyle,
  subHeader: {
    fontSize: 16,
    fontStyle: 'normal',
    color: '#28230E',
    fontFamily: 'Lato',
    fontWeight: '400',
  } as TextStyle,
});

interface Props {
  navigation: any;
}

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <TopLogo />
      </View>

      <View style={{padding: 21, paddingTop: 37}}>
        <Text style={styles.header}>{'Sign up'}</Text>
        <Text style={[styles.subHeader, {paddingTop: 16}]}>
          {"Looks like you don't have an account.\nLet's create a new one"}
        </Text>
      </View>

      <View style={{paddingTop: 19, paddingLeft: 21, paddingRight: 21}}>
        <View>
          <GlobalButton
            innerText={'Continue'}
            innerTextColor={'#28230E'}
            backGroundColor={'#FFDEA8'}
            onPressButton={() => console.log('Simple Button pressed')}
          />
        </View>
        <View style={{paddingTop: 18}}>
          <GlobalButton
            innerText={'Continue'}
            innerTextColor={'#28230E'}
            backGroundColor={'#FFDEA8'}
            onPressButton={() => console.log('Simple Button pressed')}
          />
        </View>
        <Text style={[styles.subHeader, {textAlign: 'center', paddingTop: 18}]}>
          {'or'}
        </Text>

        <View style={{paddingTop: 18}}>
          <GlobalButton
            innerText={'Sign Up with email'}
            innerTextColor={'#28230E'}
            backGroundColor={'#F5F5F5'}
            onPressButton={() => console.log('Simple Button pressed')}
          />
        </View>

        <View
          style={{display: 'flex', flexDirection: 'column', paddingTop: 33}}>
          <Text style={[styles.subHeader, {fontSize: 14}]}>
            {'Already have an acount? '}
            <Text
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={[styles.subHeader, {fontWeight: 'bold'}]}>
              {'Log in here'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
