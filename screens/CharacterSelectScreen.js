import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import { setSelectCharacter } from '../actions/characters';

import CharacterList from '../components/CharacterList';
import CreateCharacterButton from '../components/CreateCharacterButton';

const CharacterSelectScreen = props => {
  const { selectCharacter, setSelectCharacter, characters } = props;

  return (
    <View style={styles.screen}>
      <Image source={require('../assets/sword-dice.jpg')} />
      <View style={styles.listContainer}>
        <CharacterList chars={characters} />
      </View>
      <View>
        <CreateCharacterButton />
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
    backgroundColor: '#9C9C9C'
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

export default connect(mapStateToProps, { setSelectCharacter })(
  CharacterSelectScreen
);
