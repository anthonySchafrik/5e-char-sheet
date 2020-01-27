import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../Colors';

const InputBox = ({ text, handler }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          // style={{ paddingLeft: 5 }}
          placeholder="stat"
          placeholderTextColor="black"
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center'
  },
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.inputColor,
    marginVertical: 5,
    alignItems: 'center'
  }
});

export default InputBox;
