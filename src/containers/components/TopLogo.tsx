import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#28230E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#595959',
    fontWeight: 'regular',
    textAlign: 'center',
  },
});

const TopLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Rescue App</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>
          bringing your pet <span>back to you!</span>
        </Text>
      </View>
    </View>
  );
};

export default TopLogo;
