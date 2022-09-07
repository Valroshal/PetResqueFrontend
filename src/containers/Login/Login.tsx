import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle, TextInput} from 'react-native';
import TopLogo from "../components/TopLogo/TopLogo";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    paddingTop: 46,
  } as ViewStyle,
  innerContainer: {
    padding : 20,
    paddingTop: 91,
  } as ViewStyle,
  header: {
      fontSize: 32,
      fontFamily: 'Lato',
      color: "#28230E",
      alignItems: "center",
  }  as TextStyle,
  subHeader: {
      fontSize: 16,
      fontStyle: "normal",
      color: "#28230E",
      fontFamily: 'Lato',
      fontWeight: "400",
  } as TextStyle,
  field: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#8D8D8D',
      marginBottom: 20,
  } as ViewStyle,
  inputText: {
    padding: 10,
    paddingVertical:13.5,
    alignItems: "flex-start",
    fontSize: 16,
    fontFamily:'Lato' ,
    color: '#6C6C6C',
  }
});



const Login = () => {
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  
  const handleValidEmail = ({val}: { val: any }) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (!reg.test(val)) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val)) {
      setEmailValidError('');
    }
  };
  
  const loginHandler = () => {
  
  }
  
  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.innerContainer}>
        <Text style={[styles.header , {paddingBottom: 15}]}>
            {'Log in'}
        </Text>
        <Text style={[styles.subHeader, {paddingBottom: 14}]}>
            {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>
        <View style={styles.field}>
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              onChangeText={value => {
                setEmail(value);
                handleValidEmail({val: value});
              }}
            />
        </View>
        <View>
          {emailValidError ? <Text>{emailValidError}</Text> : null}
        </View>
       
        <View style={styles.field}>
            <TextInput
              placeholder="Password"
              style={styles.inputText}
            />
        </View>
        <View style={{paddingVertical: 7}}>
          <Text
            style={[styles.subHeader,{fontWeight: "700"}]}
          >
            {'Forgot your password?'}
          </Text>
        </View>
        <View style={{paddingTop: 5}}>
          <GlobalButton
            innerText={"Log in"}
            innerTextColor={'#28230E'}
            backGroundColor={'#FFDEA8'}
            onPressButton={loginHandler}
          />
        </View>
        
      </View>
    </View>
  );
};


export default Login;
