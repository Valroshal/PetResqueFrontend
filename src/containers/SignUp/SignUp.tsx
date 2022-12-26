import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Button,
  Alert
} from 'react-native';
import {Formik} from 'formik';
import TopLogo from '../components/TopLogo/TopLogo';
import GlobalButton from '../components/GlobalButton/GlobalButton';
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
    padding: 21,
    paddingTop: 35,
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


const SignUp = () => {
  return (
    <View style={styles.container}>
      <TopLogo />
      
        <Text style={[styles.header, {marginLeft:20,marginTop:35}]}>{'Sign up'}</Text>
        <Text
          style={[
            styles.subHeader,
            {display: 'flex', flexWrap: 'wrap', paddingBottom: 14,marginTop:16, marginLeft:20},
          ]}>
          {'Looks like you don\'t have an acount.\n Let\'s create a new one'}
        </Text>
      
        <GlobalButton
            innerText={'Continue'}
            innerTextColor={'#28230E'}
            backGroundColor={'#FFDEA8'}
            onPressButton={() => Alert.alert('Simple Button pressed')}
        />
 

        <GlobalButton
            innerText={'Continue'}
            innerTextColor={'#28230E'}
            backGroundColor={'#FFDEA8'}
            onPressButton={() => Alert.alert('Simple Button pressed')}
        />
        <Text style={[styles.subHeader,
            {display: 'flex', flexWrap: 'wrap',marginTop:18, marginLeft:172},
          ]}>
          {'or'}
        </Text>

       
        <GlobalButton
            innerText={'Sign Up with email'}
            innerTextColor={'#28230E'}
            backGroundColor={'#F5F5F5'}
            onPressButton={() => Alert.alert('Simple Button pressed')}
        />
      
       
        <Text style={[styles.subHeader,
            {display: 'flex', flexWrap: 'wrap', marginLeft:21, marginTop:33.5},
          ]}>
          {'Already have an acount?'}
          <Text style={{fontWeight: "bold"}}> Log in here</Text>
        </Text>
       

        
    </View>
  );
};

export default SignUp;
