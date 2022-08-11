/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AddPetFirst from './src/containers/AddPetFirst/AddPetFirst';


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
  return (
    <SafeAreaView>
      <AddPetFirst />
    </SafeAreaView>
  );
};

export default App;
