import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Colors from '../Colors';

const SkillRow = ({ text, handler, subText }) => {
  const [checked, handleChecked] = useState(false);

  const setChecked = () => handleChecked(!checked);

  return (
    <View style={styles.container}>
      <Grid style={{ alignItems: 'center' }}>
        <Col size={8}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: checked ? 'black' : null
            }}
          >
            <Text onPress={setChecked} />
          </View>
        </Col>
        <Col size={9}>
          <TextInput
            placeholder="Mult"
            placeholderTextColor="black"
            style={styles.styledTextInput}
          />
        </Col>
        <Col
          size={35}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.styledText}>{text}</Text>
        </Col>
        <Col size={13}>
          <Text style={styles.styledText}>({subText})</Text>
        </Col>
      </Grid>
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
  },
  styledText: {
    fontSize: 12
  }
});

export default SkillRow;
