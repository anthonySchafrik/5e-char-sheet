import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CharacterList = props => {
  const { chars = [] } = props;

  const renderCharacterList = () => {
    return chars.map((char, i) => {
      const { name, playerClass, level } = char;
      return (
        <View style={styles.list} key={i}>
          <Text>{name}</Text>
          <Text>{playerClass}</Text>
          <Text>{level}</Text>
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
  }
});

export default CharacterList;
