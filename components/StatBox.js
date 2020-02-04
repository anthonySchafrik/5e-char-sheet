import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const StatBox = ({ text, updateCreateCharacter, stats }) => {
  const [updateMult, handleUpdateMult] = useState('');
  const [updateStat, handleUpdateStat] = useState('');

  const handleCharacterUpdate = () => {
    const key = text.toLowerCase();

    updateCreateCharacter({
      text: 'stats',
      update: { ...stats, [key]: { mult: updateMult, stat: updateStat } }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>{text}</Text>
      <TextInput
        style={{ color: Colors.font }}
        placeholder="Mult"
        placeholderTextColor={Colors.font}
        onChangeText={text => handleUpdateMult(text)}
        onEndEditing={handleCharacterUpdate}
        value={updateMult}
      />
      <View style={styles.circleOutLine}>
        <TextInput
          style={{ paddingLeft: 5, color: Colors.font }}
          placeholder="stat"
          placeholderTextColor={Colors.font}
          onChangeText={text => handleUpdateStat(text)}
          onEndEditing={handleCharacterUpdate}
          value={updateStat}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.secondary,
    marginVertical: 5,
    alignItems: 'center'
  },
  styledText: { color: Colors.font },
  circleOutLine: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    width: 40,
    height: 30
  }
});

const mapStateToProps = state => {
  const { stats } = state.character.createCharacter;
  return { stats };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(StatBox);
