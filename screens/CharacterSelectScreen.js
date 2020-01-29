import React, { Component } from 'react';
import { View, StyleSheet, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelectCharacter, fetchCharacters } from '../actions/characters';

import CharacterList from '../components/CharacterList';
import StyledButton from '../components/StyledButton';
import Colors from '../Colors';

class CharacterSelectScreen extends Component {
  componentDidMount = () => {
    const { fetchCharactersData } = this;

    fetchCharactersData();
  };

  navScreenPush = screen => {
    const { navigation } = this.props;

    navigation.push(screen);
  };

  fetchCharactersData = async () => {
    const { fetchCharacters } = this.props;
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys !== null) {
        fetchCharacters(keys);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render = () => {
    const { navScreenPush, fetchCharactersData } = this;
    const { characters } = this.props;

    return (
      <View style={styles.screen}>
        <Image source={require('../assets/sword-dice.jpg')} />

        <View style={styles.listContainer}>
          <CharacterList
            fetchCharactersData={fetchCharactersData}
            navScreenPush={navScreenPush}
            chars={characters}
          />
        </View>

        <View>
          <StyledButton navScreenPush={navScreenPush} text="Create Character" />
        </View>
      </View>
    );
  };
}

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
