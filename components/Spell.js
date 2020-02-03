import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';

import Colors from '../Colors';

class Spell extends Component {
  state = {
    spellClass: '',
    ability: '',
    save: '',
    bonus: '',
    description: ''
  };

  stateUpdater = (key, value) => this.setState({ [key]: value });

  handleCharacterUpdate = () => {
    const { spells, updateCreateCharacter } = this.props;
    const { spellClass, ability, save, bonus, description } = this.state;

    if (
      spellClass !== '' &&
      bonus !== '' &&
      ability !== '' &&
      description !== '' &&
      save !== ''
    ) {
      updateCreateCharacter({
        text: 'spells',
        update: [...spells, { spellClass, ability, save, bonus, description }]
      });
    }
    return;
  };

  render = () => {
    const { stateUpdater, handleCharacterUpdate } = this;

    return (
      <View style={StyleSheet.container}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={{ color: Colors.font }}>Spellcasting class</Text>
            <TextInput
              style={styles.styledInput}
              onChangeText={text => stateUpdater('spellClass', text)}
              onEndEditing={handleCharacterUpdate}
            />
          </View>
          <View>
            <Text style={{ color: Colors.font }}>Spellingcasting Ability</Text>
            <TextInput
              style={styles.styledInput}
              onChangeText={text => stateUpdater('ability', text)}
              onEndEditing={handleCharacterUpdate}
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View>
            <Text style={{ color: Colors.font }}>Spell Save DC</Text>
            <TextInput
              style={styles.styledInput}
              onChangeText={text => stateUpdater('save', text)}
              onEndEditing={handleCharacterUpdate}
            />
          </View>
          <View>
            <Text style={{ color: Colors.font }}>Spell Attack Bonus</Text>
            <TextInput
              style={styles.styledInput}
              onChangeText={text => stateUpdater('bonus', text)}
              onEndEditing={handleCharacterUpdate}
            />
          </View>
        </View>

        <View style={styles.spellDescription}>
          <Text style={{ color: Colors.font }}>Spell Description</Text>
          <TextInput
            style={{ ...styles.styledInput, borderWidth: 1 }}
            multiline={true}
            onChangeText={text => stateUpdater('description', text)}
            onEndEditing={handleCharacterUpdate}
          />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  styledInput: {
    borderColor: Colors.primary,
    borderBottomWidth: 1,
    color: Colors.font
  },
  spellDescription: {
    width: '85%',
    paddingLeft: '10%',
    marginVertical: 8
  }
});

const mapStateToProps = state => {
  const { spells } = state.character.createCharacter;
  return { spells };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(Spell);
