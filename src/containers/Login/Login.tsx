import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Formik} from 'formik';
import TopLogo from '../components/TopLogo/TopLogo';
import GlobalButton from '../components/GlobalButton/GlobalButton';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
//import {useEffect} from 'react';
import * as Yup from 'yup';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 46,
  } as ViewStyle,
  innerContainer: {
    display: 'flex',
    padding: 20,
    paddingTop: 91,
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
  field: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(141, 141, 141, 0.15)',
    marginBottom: 20,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 1,
  } as ViewStyle,
  fieldError: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EC6868',
    shadowColor: '#000',
    backgroundColor: '#FFE8E8',
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 1,
  } as ViewStyle,
  inputText: {
    padding: 10,
    paddingVertical: 13.5,
    alignItems: 'flex-start',
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#6C6C6C',
  } as TextStyle,
  inputTextError: {
    padding: 10,
    paddingTop: 13.5,
    paddingBottom: 13.5,
    alignItems: 'flex-start',
    fontSize: 16,
    color: '#EC6868',
    fontFamily: 'Lato',
  } as TextStyle,
  errorText: {
    fontSize: 12,
    color: '#BA0000',
  } as TextStyle,
});

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(
      8,
      'Use at least 8 characters. Include both an uppercase\n' +
        'letter and a number',
    )
    .max(20, 'Too Long!')
    .required('Please enter password'),
  email: Yup.string()
    .email('Please enter valid email address')
    .required('Please enter valid email address - yourname@domain.com'),
});

const Login = () => {
  // useEffect(() =>
  //   {
  //     console.log("email")}
  // );

  const onPress = () => {
    console.log('pressed forgot password');
  };

  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.innerContainer}>
        <Text style={[styles.header, {paddingBottom: 15}]}>{'Log in'}</Text>
        <Text
          style={[
            styles.subHeader,
            {display: 'flex', flexWrap: 'wrap', paddingBottom: 14},
          ]}>
          {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log('submit: ', values);
          }}>
          {({handleSubmit}) => (
            <>
              <EmailField />
              <PasswordField />
              <View style={{paddingVertical: 7}}>
                <TouchableOpacity style={styles.subHeader} onPress={onPress}>
                  <Text>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 5}}>
                <GlobalButton
                  innerText={'Log in'}
                  innerTextColor={'#28230E'}
                  backGroundColor={'#FFDEA8'}
                  onPressButton={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
