import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../../Colors';

const Character = ({
  name,
  playerClass,
  age,
  weight,
  eyes,
  skin,
  hair,
  appearance,
  story,
  bonds,
  flaws,
  ideals,
  allies
}) => {
  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify({ name })}</Text>
      <Text>{JSON.stringify({ playerClass })}</Text>
      <Text>{JSON.stringify({ age })}</Text>
      <Text>{JSON.stringify({ weight })}</Text>
      <Text>{JSON.stringify({ eyes })}</Text>
      <Text>{JSON.stringify({ skin })}</Text>
      <Text>{JSON.stringify({ hair })}</Text>
      <Text>{JSON.stringify({ appearance })}</Text>
      <Text>{JSON.stringify({ story })}</Text>
      <Text>{JSON.stringify({ bonds })}</Text>
      <Text>{JSON.stringify({ flaws })}</Text>
      <Text>{JSON.stringify({ ideals })}</Text>
      <Text>{JSON.stringify({ allies })}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const {
    'character name': name,
    class: playerClass,
    age,
    weight,
    eyes,
    skin,
    hair,
    'character appearance': appearance,
    'back story': story,
    bonds,
    flaws,
    ideals,
    'allies & organizations': allies
  } = state.character.selectCharacter;

  return {
    name,
    playerClass,
    age,
    weight,
    eyes,
    skin,
    hair,
    appearance,
    story,
    bonds,
    flaws,
    ideals,
    allies
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    justifyContent: 'space-evenly'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Character);
