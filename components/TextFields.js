import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextFields = ({ label, name }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput style={styles.textInput} multiline={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    width: '85%'
  },
  textInput: {
    borderColor: '#666666',
    borderWidth: 1
  }
});

export default TextFields;
