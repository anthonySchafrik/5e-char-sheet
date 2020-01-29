import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';

import Colors from '../Colors';

const InputBox = ({ text, updateCreateCharacter, style }) => {
  const [update, handleUpdate] = useState('');

  const handleCharacterUpdate = () =>
    updateCreateCharacter({ text: text.toLowerCase(), update });

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          style={[style, styles.styledTextInput]}
          placeholder="stat"
          placeholderTextColor="black"
          onChangeText={text => handleUpdate(text)}
          onEndEditing={handleCharacterUpdate}
        />
      </View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center'
  },
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.inputColor,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  styledTextInput: {
    fontSize: 30
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(InputBox);
