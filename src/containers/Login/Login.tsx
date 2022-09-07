import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle, TextInput} from 'react-native';
import TopLogo from "../components/TopLogo/TopLogo";
import GlobalButton from "../components/GlobalButton/GlobalButton";

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    marginTop: 46,
  } as ViewStyle,
  subContainer: {
    padding : 20,
    paddingTop: 71,
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
  } as TextStyle,
  btn: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#8D8D8D',
  }
});

const loginHandler = () => {

}

const Login = () => {
  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.subContainer}>
        <Text style={[styles.header , {paddingBottom: 15}]}>
            {'Log in'}
        </Text>
        <Text style={[styles.subHeader, {paddingBottom: 14}]}>
            {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>
        <View style={styles.btn}>
            <TextInput
              placeholder="Email"
              style={{ padding: 10,paddingVertical:13.5, fontSize: 16, fontFamily:'Lato' , color: '#6C6C6C'}}
            />
        </View>
        <View style={styles.btn}>
            <TextInput
              placeholder="Password"
              style={{ padding: 10,paddingVertical:13.5, fontSize: 16, fontFamily:'Lato' , color: '#6C6C6C'}}
            />
        </View>
        <Text>{'Forgot your password?'}</Text>
        <GlobalButton innerText={"Log in"} innerTextColor={'black'} backGroundColor={'#FFDEA8'} onPressButton={loginHandler} />
      </View>
    </View>
  );
};


export default Login;
