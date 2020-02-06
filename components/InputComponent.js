import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const InputComponent = ({ text, updateCreateCharacter }) => {
  const [update, handleUpdate] = useState('');

  const handleCharacterUpdate = () =>
    updateCreateCharacter({ text: text.toLowerCase(), update });

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.font }}>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleUpdate(text)}
        onEndEditing={handleCharacterUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    color: Colors.font,
    width: '45%'
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(InputComponent);
