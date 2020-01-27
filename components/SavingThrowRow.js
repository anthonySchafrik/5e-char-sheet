import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Colors from '../Colors';

const SavingThrowRow = ({ text, handler }) => {
  const [checked, handleChecked] = useState(false);

  return (
    <Grid style={styles.container}>
      <Col>
        <View
          style={{
            ...styles.checkedCircle,
            backgroundColor: checked ? 'black' : Colors.underLine
          }}
        >
          <Text onPress={() => handleChecked(!checked)} />
        </View>
      </Col>

      <Col>
        <TextInput
          style={{ paddingLeft: 6 }}
          placeholder="Mult"
          placeholderTextColor="black"
          style={styles.styledInput}
        />
      </Col>

      <Col>
        <Text>{text}</Text>
      </Col>
    </Grid>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 5
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
    borderBottomWidth: 1,
    width: '35%'
  }
});

export default SavingThrowRow;
