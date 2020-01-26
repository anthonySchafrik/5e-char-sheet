import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import Colors from '../Colors';

const StyledButton = props => {
  const { navScreenPush, text } = props;
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Text style={styles.text} onPress={() => navScreenPush(text)}>
          {text}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.underLine,
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