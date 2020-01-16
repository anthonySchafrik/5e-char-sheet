import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const LandingScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>5th Edition</Text>
      <Image source={require('../assets/logo.png')} resizeMode="cover" />
      <Text
        style={styles.text}
        onPress={() => {
          props.navigation.navigate('Character');
        }}
      >
        Character Selection
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: '#B6B6B6',
    fontSize: 30
  }
});

export default LandingScreen;
