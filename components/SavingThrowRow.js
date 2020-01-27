import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Colors from '../Colors';

const SavingThrowRow = ({ text, handler }) => {
  const [checked, handleChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.checkedCircle,
          backgroundColor: checked ? 'black' : Colors.underLine
        }}
      >
        <Text onPress={() => handleChecked(!checked)} />
      </View>
      <TextInput
        style={{ paddingLeft: 6 }}
        placeholder="Mult"
        placeholderTextColor="black"
        style={styles.styledInput}
      />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  checkedCircle: {
    height: 25,
    width: 25,
    borderColor: '#323232',
    borderWidth: 1,
    borderRadius: 25
  },
  styledInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
  }
});

export default SavingThrowRow;
