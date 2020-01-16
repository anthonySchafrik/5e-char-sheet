import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { setSelectCharacter } from '../actions/characters';

const CharacterList = props => {
  const { chars = [], setSelectCharacter } = props;

  const handleSelectCharacter = char => () => setSelectCharacter(char);

  const renderCharacterList = () => {
    return chars.map((char, i) => {
      const { name, playerClass, level, id } = char;
      return (
        <View style={styles.list} key={i}>
          <View style={styles.test}>
            <Text onPress={handleSelectCharacter(char)}>{name}</Text>
            <Text>{playerClass}</Text>
            <Text>{level}</Text>
          </View>

          <Ionicons name="md-close-circle-outline" size={24} color="black" />
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
  test: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { setSelectCharacter })(CharacterList);
