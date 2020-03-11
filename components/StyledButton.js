import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import Colors from '../Colors';

const StyledButton = ({ navScreenPush, text, style }) => {
  return (
    // <TouchableNativeFeedback onPress={() => navScreenPush(text)}>
      <View style={[styles.container, style]}>
        <Text onPress={() => navScreenPush(text)} style={styles.text}>{text}</Text>
      </View>
    // </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    borderRadius: 10
  },
  text: {
    color: 'white'
  }
});

export default StyledButton;
