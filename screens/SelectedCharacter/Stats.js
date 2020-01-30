import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../../Colors';

const Stats = ({
  stats,
  inspiration,
  proficiency,
  savingThrows,
  armorClass,
  initiative,
  speed,
  hp,
  hd,
  skills
}) => {
  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify({ stats })}</Text>
      <Text>{JSON.stringify({ inspiration })}</Text>
      <Text>{JSON.stringify({ proficiency })}</Text>
      <Text>{JSON.stringify({ savingThrows })}</Text>
      <Text>{JSON.stringify({ armorClass })}</Text>
      <Text>{JSON.stringify({ initiative })}</Text>
      <Text>{JSON.stringify({ speed })}</Text>
      <Text>{JSON.stringify({ hp })}</Text>
      <Text>{JSON.stringify({ hd })}</Text>
      <Text>{JSON.stringify({ skills })}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const {
    stats,
    inspiration,
    'proficiency bonus': proficiency,
    savingThrows,
    'armor class': armorClass,
    initiative,
    speed,
    'hit points maximum': hp,
    'hit dice': hd,
    skills
  } = state.character.selectCharacter;

  return {
    stats,
    inspiration,
    proficiency,
    savingThrows,
    armorClass,
    initiative,
    speed,
    hp,
    hd,
    skills
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingTop: 30,
    justifyContent: 'space-evenly'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Stats);
