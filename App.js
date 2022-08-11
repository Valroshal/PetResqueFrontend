/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import AddRemoveCard from './src/containers/components/AdddRemoveCard/AddRemoveCard.tsx';

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

const choices = [
  { upperText: "Add lost pet" , lowText: "I`ve lost my pet and\n" +
        "want to find it" },
  { upperText: "Add found pet" , lowText: "I`ve found a pet\n" +
        "and looking for it`s owners"}
  ];




const App = () => {
  return (
    <SafeAreaView>
      <AddRemoveCard upperText = {choices[0].upperText} lowerText = {choices[0].lowText}/>
    </SafeAreaView>
  );
};

export default App;
