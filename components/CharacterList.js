import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectCharacter, deleteCharacter } from '../actions/characters';

const CharacterList = props => {
  const {
    chars = [],
    setSelectCharacter,
    deleteCharacter,
    navScreenPush
  } = props;

  const handleSelectCharacter = char => () => {
    setSelectCharacter(char);
    navScreenPush('Character');
  };

  const handleDeleteCharacter = id => () => {
    Alert.alert(
      'Delete Character',
      'This cannot be undone',
      [{ text: 'No' }, { text: 'Yes', onPress: () => deleteCharacter(id) }],
      {
        cancelable: false
      }
    );
  };

  const renderCharacterList = () => {
    return chars.map((char, i) => {
      const { 'character name': name, id } = char;

      return (
        <View style={styles.list} key={i}>
          <View style={styles.innerContainer}>
            <Text onPress={handleSelectCharacter(char)}>{name}</Text>
          </View>

          <Ionicons
            name="md-close-circle-outline"
            size={24}
            color="black"
            onPress={handleDeleteCharacter(id)}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={{ width: 300 }}>{renderCharacterList()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5
  },
  innerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ setSelectCharacter, deleteCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(CharacterList);
