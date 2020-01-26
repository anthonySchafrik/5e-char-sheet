import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../Colors';

const StatBox = ({ text, handler }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>{text}</Text>
      <TextInput placeholder="Mult" placeholderTextColor="black" />
      <View style={styles.circleOutLine}>
        <TextInput
          style={{ paddingLeft: 5 }}
          placeholder="stat"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.inputColor,
    marginVertical: 5,
    alignItems: 'center'
  },
  styledText: {},
  circleOutLine: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.underLine,
    borderWidth: 1,
    borderRadius: 25,
    width: 40,
    height: 30
  }
});

export default StatBox;
