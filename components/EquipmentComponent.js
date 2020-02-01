import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Colors from '../Colors';

class EquipmentComponent extends Component {
  state = { cp: '', sp: '', ep: '', gp: '', pp: '', text: '' };

  stateUpdater = (key, value) => {
    const lowerCaseKey = key.toLowerCase();

    this.setState({ [lowerCaseKey]: value });
  };

  handleCharacterUpdate = () => {
    const { state } = this;
    const { updateCreateCharacter } = this.props;

    updateCreateCharacter({ text: 'equipment', update: state });
  };

  buildRowContainer = texts => {
    const { stateUpdater, handleCharacterUpdate } = this;

    return texts.map((x, i) => {
      return (
        <View key={i} style={styles.row}>
          <Text>{x}</Text>
          <TextInput
            style={styles.rowInput}
            multiline={true}
            onChangeText={text => stateUpdater(x, text)}
            onEndEditing={handleCharacterUpdate}
          />
        </View>
      );
    });
  };

  render = () => {
    const { buildRowContainer, stateUpdater, handleCharacterUpdate } = this;

    return (
      <View style={styles.screen}>
        <View>
          <Text>Equipment</Text>
        </View>
        <View style={styles.container}>
          {/* left column */}
          <View style={styles.rowContainer}>
            {buildRowContainer(['CP', 'SP', 'EP', 'GP', 'PP'])}
          </View>

          {/* Right column */}
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={t => stateUpdater('text', t)}
              style={styles.textInput}
              multiline={true}
              onEndEditing={handleCharacterUpdate}
            />
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '85%',
    paddingBottom: 15
  },
  container: {
    width: '100%',
    borderColor: Colors.underLine,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
  },
  rowContainer: {
    paddingBottom: 5,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60
  },
  inputContainer: {
    width: '75%'
  },
  textInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
  }
});

const mapStateToProps = state => {
  const { selectedCharacter } = state.character;
  return {
    selectedCharacter
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(EquipmentComponent);
