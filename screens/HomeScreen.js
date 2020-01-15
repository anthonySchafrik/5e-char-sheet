import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button
        title="next"
        // onPress={() => {
        //   props.navigation.navigate('');
        // }}
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

export default HomeScreen;
