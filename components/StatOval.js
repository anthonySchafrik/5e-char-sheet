import React, { useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../actions/characters';
import Colors from '../Colors';

const statReducer = (state, action) => {
  const { type, payload } = action;
  const { key, value } = payload;
  const { stats, savingThrows } = state;

  switch (type) {
    case 'stat':
      return {
        ...state,
        stats: {
          ...stats,
          [key]: {
            ...stats[key],
            stat: value
          }
        }
      };
    case 'statMult':
      return {
        ...state,
        stats: {
          ...stats,
          [key]: {
            ...stats[key],
            muli: value
          }
        }
      };
    case 'saving':
      return {
        ...state,
        savingThrows: {
          ...savingThrows,
          [key]: {
            ...savingThrows[key],
            muli: value
          }
        }
      };
    default:
      throw new Error();
  }
};

const StatOval = ({ stat, stats, savingThrows }) => {
  const title = stat.charAt(0).toUpperCase() + stat.slice(1);

  const [updatedStats, statsDispatch] = useReducer(statReducer, {
    stats,
    savingThrows
  });

  const { stat: statKey, muli: statMult } = updatedStats.stats[stat];
  const { muli: save } = updatedStats.savingThrows[stat];

  console.log(updatedStats);
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>{title}</Text>
      <View style={styles.statRow}>
        <View style={styles.center}>
          <Text>Score</Text>
          <TextInput
            onChangeText={text =>
              statsDispatch({
                type: 'stat',
                payload: { key: stat, value: text }
              })
            }
            value={statKey}
          />
        </View>

        <View style={styles.center}>
          <Text>Multiplier</Text>
          <TextInput
            onChangeText={text =>
              statsDispatch({
                type: 'statMult',
                payload: { key: stat, value: text }
              })
            }
            value={statMult}
          />
        </View>

        <View style={styles.center}>
          <Text>Save</Text>
          <TextInput
            onChangeText={text =>
              statsDispatch({
                type: 'saving',
                payload: { key: stat, value: text }
              })
            }
            value={save}
          />
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
