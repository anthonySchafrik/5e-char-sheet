import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelectCharacter } from '../actions/characters';

import CharacterList from '../components/CharacterList';
import CreateCharacterButton from '../components/CreateCharacterButton';

const CharacterSelectScreen = props => {
  const { selectCharacter, setSelectCharacter, characters, navigation } = props;

  const navScreenPush = screen => navigation.push(screen);

  return (
    <View style={styles.screen}>
      <Image source={require('../assets/sword-dice.jpg')} />

      <View style={styles.listContainer}>
        <CharacterList navScreenPush={navScreenPush} chars={characters} />
      </View>

      <View>
        <CreateCharacterButton navScreenPush={navScreenPush} />
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

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ setSelectCharacter }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CharacterSelectScreen);
