import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';

import Colors from '../Colors';
const Attacks = () => {
  return (
    <Grid style={styles.screen}>
      <Col>
        <TextInput
          // style={styles.styledInput}
          placeholder="Attack Name"
          placeholderTextColor="black"
        />
      </Col>

      <Col>
        <TextInput
          // style={styles.styledInput}
          placeholder="Bonus"
          placeholderTextColor="black"
        />
      </Col>

      <Col>
        <TextInput
          // style={styles.styledInput}
          placeholder="Damage"
          placeholderTextColor="black"
        />
      </Col>
    </Grid>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  styledInput: {
    borderBottomWidth: 1,
    borderColor: Colors.underLine
  }
});

export default Attacks;

/* 

 user needs to be able to enter attack

 button that will render the attack component then user can enter info

*/
