import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import TopLogo from "../components/TopLogo/TopLogo";

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
  },
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
  }

});

const Login = () => {
  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.subContainer}>
        <Text style={[styles.header , {paddingBottom: 15}]}>
            {'Log in'}
        </Text>
        <Text style={styles.subHeader}>
            {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>

      </View>

    </View>
  );
};


export default Login;
