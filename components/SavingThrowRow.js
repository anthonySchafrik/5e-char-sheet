import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SavingThrowRow = ({ text, handler }) => {
  const [checked, handleChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View
        onPress={() => handleChecked(!checked)}
        style={{ backgroundColor: checked ? 'black' : 'white' }}
      ></View>
      <TextInput
        style={{ paddingLeft: 6 }}
        placeholder="Mult"
        placeholderTextColor="black"
      />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default SavingThrowRow;
