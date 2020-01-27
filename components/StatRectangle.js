import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../Colors';

const StatRectangle = ({ text, handler, outline }) => {
  return (
    <View style={styles.container}>
      <View style={styles[outline]}>
        <TextInput
          style={{ paddingLeft: 6 }}
          placeholder="Mult"
          placeholderTextColor="black"
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 260,
    backgroundColor: Colors.inputColor,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  circle: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.underLine,
    borderWidth: 1,
    borderRadius: 25
  },
  box: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.underLine,
    borderWidth: 1
  }
});

export default StatRectangle;
