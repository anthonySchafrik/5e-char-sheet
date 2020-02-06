import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const TextFields = ({ text, updateCreateCharacter }) => {
  const [update, handleUpdate] = useState('');

  const handleCharacterUpdate = () =>
    updateCreateCharacter({ text: text.toLowerCase(), update });

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.font }}>{text}</Text>
      <TextInput
        style={styles.textInput}
        multiline={true}
        onChangeText={text => handleUpdate(text)}
        onEndEditing={handleCharacterUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    width: '85%'
  },
  textInput: {
    borderColor: Colors.primary,
    borderWidth: 1,
    color: Colors.font
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(TextFields);
