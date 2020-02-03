import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const StatRectangle = ({ text, updateCreateCharacter, outline }) => {
  const [update, handleUpdate] = useState('');

  const handleCharacterUpdate = () =>
    updateCreateCharacter({ text: text.toLowerCase(), update });

  return (
    <View style={styles.container}>
      <View style={styles[outline]}>
        <TextInput
          style={{ paddingLeft: update.length > 0 ? 6 : 0, color: Colors.font }}
          placeholder="Mult"
          value={update}
          placeholderTextColor={Colors.font}
          onChangeText={text => handleUpdate(text)}
          onEndEditing={handleCharacterUpdate}
        />
      </View>
      <Text style={{ color: Colors.font }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 260,
    backgroundColor: Colors.secondary,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  circle: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 25
  },
  box: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(StatRectangle);
