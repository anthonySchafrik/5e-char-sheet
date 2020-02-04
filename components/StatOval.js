import React, { useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../actions/characters';
import Colors from '../Colors';

const StatOval = ({
  stat,
  updateSelectedCharacter,
  score,
  multiplier,
  save,
  proficient
}) => {
  const title = stat.charAt(0).toUpperCase() + stat.slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>{title}</Text>
      <View style={styles.statRow}>
        <View style={styles.center}>
          <Text>Score</Text>
          <TextInput value={score} />
        </View>

        <View style={styles.center}>
          <Text>Multiplier</Text>
          <TextInput value={multiplier} />
        </View>

        <View style={styles.center}>
          <Text>Save</Text>
          <TextInput value={save} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    width: 170,
    borderRadius: 40
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 70,
    alignItems: 'center'
  },
  styledText: {
    marginTop: 2
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  const { stats, savingThrows } = state.character.selectedCharacter;

  return {
    stats,
    savingThrows
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(StatOval);
