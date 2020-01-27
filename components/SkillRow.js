import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../Colors';

const SkillRow = ({ text, handler, subText }) => {
  const [checked, handleChecked] = useState(false);

  const setChecked = () => handleChecked(!checked);

  return (
    <View style={styles.container}>
      <View
        style={{ ...styles.circle, backgroundColor: checked ? 'black' : null }}
      >
        <Text onPress={setChecked} />
      </View>
      <TextInput
        placeholder="Mult"
        placeholderTextColor="black"
        style={styles.styledTextInput}
      />
      <Text>{text}</Text>
      <Text>({subText})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center'
  },
  circle: {
    height: 15,
    width: 15,
    borderColor: '#323232',
    borderWidth: 1,
    borderRadius: 25
  },
  styledTextInput: {
    borderBottomColor: Colors.underLine,
    borderBottomWidth: 1
  }
});

export default SkillRow;
