import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

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
    borderBottomColor: '#4E4E4E',
    borderBottomWidth: 1,
    color: '#4E4E4E',
    width: '45%'
  }
});

export default InputComponent;
