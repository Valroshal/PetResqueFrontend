import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>{'Hello, we are looking for pets'}</Text>
    </View>
  );
};

export default Login;
