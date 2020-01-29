import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

const SkillRow = ({ text, updateCreateCharacter, subText, skills }) => {
  const [proficient, handleProficient] = useState(false);
  const [updateMult, handleUpdateMult] = useState('');

  const setProficient = () => handleProficient(!proficient);

  const handleCharacterUpdate = () => {
    const key = text.toLowerCase();

    updateCreateCharacter({
      text: 'skills',
      update: {
        ...skills,
        [key]: { muli: updateMult, proficient }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Grid style={{ alignItems: 'center' }}>
        <Col size={8}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: proficient ? 'black' : null
            }}
          >
            <Text onPress={setProficient} />
          </View>
        </Col>
        <Col size={9}>
          <TextInput
            placeholder="Mult"
            placeholderTextColor="black"
            style={styles.styledTextInput}
            onChangeText={text => handleUpdateMult(text)}
            onEndEditing={handleCharacterUpdate}
          />
        </Col>
        <Col
          size={35}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.styledText}>{text}</Text>
        </Col>
        <Col size={13}>
          <Text style={styles.styledText}>({subText})</Text>
        </Col>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 2,
    alignItems: 'center'
  },
  circle: {
    height: 15,
    width: 15,
    borderColor: '#323232',
    borderWidth: 1,
    borderRadius: 25
  },
  styledTextInput: {
    borderBottomColor: Colors.underLine,
    borderBottomWidth: 1
  },
  styledText: {
    fontSize: 12
  }
});

const mapStateToProps = state => {
  const { skills } = state.character.createCharacter;
  return { skills };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(SkillRow);
