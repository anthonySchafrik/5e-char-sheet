import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';

import Colors from '../Colors';
const Attacks = () => {
  return (
    <Grid style={styles.screen}>
      <Col>
        <View style={styles.colContainer}>
          <TextInput placeholder="Attack Name" placeholderTextColor="black" />
        </View>
      </Col>

      <Col>
        <View style={styles.colContainer}>
          <TextInput placeholder="Bonus" placeholderTextColor="black" />
        </View>
      </Col>

      <Col>
        <View style={styles.colContainer}>
          <TextInput placeholder="Damage" placeholderTextColor="black" />
        </View>
      </Col>
    </Grid>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  colContainer: {
    borderBottomWidth: 1,
    width: '90%',
    borderColor: Colors.underLine
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
