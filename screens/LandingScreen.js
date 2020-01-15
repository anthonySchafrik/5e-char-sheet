import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LandingScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>LandingScreen</Text>
      <Button
        title="Home"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LandingScreen;
