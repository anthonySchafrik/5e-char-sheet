import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const SavingThrowRow = ({ text, updateCreateCharacter, savingThrows }) => {
  const [proficient, handleProficient] = useState(false);
  const [updateMult, handleUpdateMult] = useState('');

  const handleCharacterUpdate = () => {
    const key = text.toLowerCase();

    updateCreateCharacter({
      text: 'savingThrows',
      update: {
        ...savingThrows,
        [key]: { mult: updateMult, proficient }
      }
    });
  };

  return (
    <Grid style={styles.container}>
      <Col>
        <View
          style={{
            ...styles.checkedCircle,
            backgroundColor: proficient ? 'black' : Colors.primary
          }}
        >
          <Text
            style={{ color: Colors.font }}
            onPress={() => handleProficient(!proficient)}
          />
        </View>
      </Col>

      <Col>
        <TextInput
          placeholder="Mult"
          placeholderTextColor={Colors.font}
          style={styles.styledInput}
          onChangeText={text => handleUpdateMult(text)}
          onEndEditing={handleCharacterUpdate}
          value={updateMult}
        />
      </Col>

      <Col style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: Colors.font }}>{text}</Text>
      </Col>
    </Grid>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 15
  },
  checkedCircle: {
    height: 25,
    width: 25,
    borderColor: '#323232',
    borderWidth: 1,
    borderRadius: 25
  },
  styledInput: {
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    width: '35%',
    color: Colors.font
  }
});

const mapStateToProps = state => {
  const { savingThrows } = state.character.createCharacter;
  return { savingThrows };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(SavingThrowRow);
