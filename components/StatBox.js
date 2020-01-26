import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../Colors';

const StatBox = ({ text, handler }) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 75,
    backgroundColor: Color.inputColor
  }
});

export default StatBox;
