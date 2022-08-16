/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import GlobalBtn from './src/containers/components/GlobalBtn/GlobalBtn';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


const App = () => {

  const handlePressBtn = () => {
    console.log("bla bla");
  }

  return (
    <SafeAreaView>
      <GlobalBtn
          innerText="Yes, my pet is lost"
          innerTextColor="black"
          backGroundColor="#B8B8B8"
          onPressButton={handlePressBtn}
      />
    </SafeAreaView>
  );
};

export default App;
