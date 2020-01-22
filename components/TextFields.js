import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../Colors';

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
    borderColor: Colors.underLine,
    borderWidth: 1
  }
});

export default TextFields;
