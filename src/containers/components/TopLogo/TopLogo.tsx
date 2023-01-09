import * as React from 'react';
import {StyleSheet, ViewStyle, TextStyle, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 88,
    width: 180,
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
  } as ViewStyle,
  title: {
    fontSize: 36,
    fontFamily: 'Concert One',
    color: '#FF6A3D',
    fontWeight: 'bold',
    textAlign: 'center',
  } as TextStyle,
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#595959',
    fontWeight: 'normal',
    justifyContent: 'center',
    textAlign: 'center',
  } as ViewStyle,
});

const TopLogo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Rescue App</Text>
      </View>
      <View style={{width: 150}}>
        <Text style={styles.subtitle}>bringing your pet back to you!</Text>
      </View>
    </View>
  );
};

export default TopLogo;
