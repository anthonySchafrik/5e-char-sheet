import React, { useState } from 'react';
import { View, StyleSheet, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelectCharacter, fetchCharacters } from '../actions/characters';

import CharacterList from '../components/CharacterList';
import StyledButton from '../components/StyledButton';
import Colors from '../Colors';

const CharacterSelectScreen = ({
  selectCharacter,
  setSelectCharacter,
  characters,
  navigation,
  fetchCharacters
}) => {
  const navScreenPush = screen => navigation.push(screen);

  const fetchCharactersData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys !== null) {
        console.log(keys);
        fetchCharacters(keys);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetchCharactersData();

  return (
    <View style={styles.screen}>
      <Image source={require('../assets/sword-dice.jpg')} />

      <View style={styles.listContainer}>
        <CharacterList navScreenPush={navScreenPush} chars={characters} />
      </View>

      <View>
        <StyledButton navScreenPush={navScreenPush} text="Create Character" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.backGround
  },
  listContainer: {
    height: 170,
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { selectCharacter, characters } = state.character;
  return {
    selectCharacter,
    characters
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ setSelectCharacter, fetchCharacters }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CharacterSelectScreen);
