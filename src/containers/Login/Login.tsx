import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Formik} from 'formik';
import TopLogo from "../components/TopLogo/TopLogo";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import {useEffect} from "react";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: '#FFFFFF',
    paddingTop: 46,
  } as ViewStyle,
  innerContainer: {
    display: "flex",
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
});



const Login = () => {
  
  useEffect(() =>
    {
      console.log("email")}
  );
  
  
  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.innerContainer}>
        <Text style={[styles.header , {paddingBottom: 15}]}>
            {'Log in'}
        </Text>
        <Text style={[styles.subHeader, {display: "flex", flexWrap: "wrap",paddingBottom: 14}]}>
            {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
        >
          {({handleSubmit}) => (
            <>
              <EmailField />
              <PasswordField />
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
                  onPressButton={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  )
};

export default Login;
