import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Button,
  Alert,
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
  innerContainer: {} as ViewStyle,
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
      <TopLogo />

      <View style={[styles.innerContainer, {padding: 21, paddingTop: 37}]}>
        <Text style={styles.header}>{'Sign up'}</Text>
        <Text style={[styles.subHeader, {paddingTop: 16}]}>
          {"Looks like you don't have an acount.\nLet's create a new one"}
        </Text>

        <View style={[styles.innerContainer, {paddingTop: 19}]}>
          <View style={[styles.innerContainer, {paddingTop: 0}]}>
            <GlobalButton
              innerText={'Continue'}
              innerTextColor={'#28230E'}
              backGroundColor={'#FFDEA8'}
              onPressButton={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={[styles.innerContainer, {paddingTop: 18}]}>
            <GlobalButton
              innerText={'Continue'}
              innerTextColor={'#28230E'}
              backGroundColor={'#FFDEA8'}
              onPressButton={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <Text
            style={[
              styles.subHeader,
              {width: 320, height: 34, textAlign: 'center', paddingTop: 18},
            ]}>
            {'or'}
          </Text>

          <View
            style={[
              styles.innerContainer,
              {paddingTop: 18, paddingBottom: 33},
            ]}>
            <GlobalButton
              innerText={'Sign Up with email'}
              innerTextColor={'#28230E'}
              backGroundColor={'#F5F5F5'}
              onPressButton={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>

        <Text style={[styles.subHeader, {}]}>
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
  );
};

export default SignUp;
