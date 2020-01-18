import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../Colors';
const InputComponent = ({ label, name }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderBottomColor: Colors.inputColor,
    borderBottomWidth: 1,
    color: Colors.inputColor,
    width: '45%'
  }
});

export default InputComponent;
