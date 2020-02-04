import React, { useEffect, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../../actions/characters';

import StatOval from '../../components/StatOval';
import Menu from '../../components/Menu';

import Colors from '../../Colors';
import store from '../../store';

const combatReducer = (state, action) => {
  const { type, payload } = action;
  const { key, value } = payload;

  switch (type) {
    case 'update':
      return {
        ...state,
        [key]: value
      };
    case 'retrieve':
      return state;
    default:
      throw new Error();
  }
};

// const statsReducer = (state, action) => {
//   const { type, payload } = action;
//   const { key, value } = payload;
//   const { stats, savingThrows } = state;

//   switch (type) {
//     case 'stat':
//       return {
//         ...state,
//         stats: {
//           ...stats,
//           [key]: {
//             ...stats[key],
//             stat: value
//           }
//         }
//       };
//     case 'statMult':
//       return {
//         ...state,
//         stats: {
//           ...stats,
//           [key]: {
//             ...stats[key],
//             mult: value
//           }
//         }
//       };
//     case 'saving':
//       return {
//         ...state,
//         savingThrows: {
//           ...savingThrows,
//           [key]: {
//             ...savingThrows[key],
//             mult: value
//           }
//         }
//       };
//     default:
//       throw new Error();
//   }
// };

const Stats = ({
  combatSkills,
  stats,
  savingThrows,
  updateSelectedCharacter,
  navigation
}) => {
  const [updatedCombatSkills, combatDispatch] = useReducer(
    combatReducer,
    combatSkills
  );
  // const [updateStats, statsDispatch] = useReducer(statsReducer, {
  //   stats,
  //   savingThrows
  // });

  const {
    proficiency,
    armorClass,
    initiative,
    speed,
    hp,
    hd
  } = updatedCombatSkills;

  const handleUpdateCharacter = (key, value) => () =>
    updateSelectedCharacter({ key, value });

  useEffect(() => {
    return async () => {
      const { selectedCharacter } = store.getState().character;
      const { 'character name': name } = selectedCharacter;
      console.log('unMount stats', selectedCharacter);
      try {
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <ScrollView>
        <View style={styles.styledMenu}>
          <Menu navigation={navigation} />
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>HP</Text>
            <TextInput
              value={hp}
              onChangeText={text =>
                combatDispatch({
                  type: 'update',
                  payload: { key: 'hp', value: text }
                })
              }
              onEndEditing={handleUpdateCharacter('hit points maximum', hp)}
            />
          </View>

          <View style={styles.squContainer}>
            <View style={styles.row}>
              <Text>Initiative</Text>
              <TextInput
                value={initiative}
                onChangeText={text =>
                  combatDispatch({
                    type: 'update',
                    payload: { key: 'initiative', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter('initiative', initiative)}
              />
            </View>

            <View style={styles.row}>
              <Text>Speed</Text>
              <TextInput
                value={speed}
                onChangeText={text =>
                  combatDispatch({
                    type: 'update',
                    payload: { key: 'speed', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter('speed', speed)}
              />
            </View>
          </View>

          <View style={styles.midContainer}>
            <View style={styles.centered}>
              <Text style={styles.styledText}>Hit Dice</Text>
              <TextInput
                value={hd}
                style={styles.styledText}
                onChangeText={text =>
                  combatDispatch({
                    type: 'update',
                    payload: { key: 'hd', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter('hit dice', hd)}
              />
            </View>

            <ImageBackground
              style={{
                width: 70,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              source={require('../../assets/shield.png')}
            >
              <TextInput
                style={{
                  ...styles.styledText,
                  paddingLeft: armorClass.length > 1 ? 5 : 14
                }}
                value={armorClass}
                onChangeText={text =>
                  combatDispatch({
                    type: 'update',
                    payload: { key: 'armorClass', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter('armor class', armorClass)}
              />
            </ImageBackground>

            <View style={styles.centered}>
              <Text style={styles.styledText}>Proficiency</Text>
              <TextInput
                value={proficiency}
                style={styles.styledText}
                onChangeText={text =>
                  combatDispatch({
                    type: 'update',
                    payload: { key: 'proficiency', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'proficiency bonus',
                  proficiency
                )}
              />
            </View>
          </View>

          <View style={styles.statContainer}>
            <View style={styles.row}>
              <StatOval
                stat="strength"
                score={stats.strength.stat}
                multiplier={stats.strength.mult}
                save={savingThrows.strength.mult}
                proficient={savingThrows.strength.proficient}
              />
              <StatOval
                stat="dexterity"
                score={stats.dexterity.stat}
                multiplier={stats.dexterity.mult}
                save={savingThrows.dexterity.mult}
                proficient={savingThrows.dexterity.proficient}
              />
            </View>

            <View style={styles.row}>
              <StatOval
                stat="intelligence"
                score={stats.intelligence.stat}
                multiplier={stats.intelligence.mult}
                save={savingThrows.intelligence.mult}
                proficient={savingThrows.intelligence.proficient}
              />
              <StatOval
                stat="charisma"
                score={stats.charisma.stat}
                multiplier={stats.charisma.mult}
                save={savingThrows.charisma.mult}
                proficient={savingThrows.charisma.proficient}
              />
            </View>

            <View style={styles.row}>
              <StatOval
                stat="wisdom"
                score={stats.wisdom.stat}
                multiplier={stats.wisdom.mult}
                save={savingThrows.wisdom.mult}
                proficient={savingThrows.wisdom.proficient}
              />
              <StatOval
                stat="constitution"
                score={stats.constitution.stat}
                multiplier={stats.constitution.mult}
                save={savingThrows.constitution.mult}
                proficient={savingThrows.constitution.proficient}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  const {
    stats,
    'proficiency bonus': proficiency,
    'armor class': armorClass,
    initiative,
    speed,
    'hit points maximum': hp,
    'hit dice': hd,
    'character name': name,
    savingThrows
  } = state.character.selectedCharacter;

  return {
    combatSkills: {
      proficiency,
      armorClass,
      initiative,
      speed,
      hp,
      hd,
      name
    },
    stats,
    savingThrows
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    top: -35,
    alignItems: 'center'
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    borderRadius: 10
  },
  squContainer: {
    backgroundColor: Colors.primary,
    height: 75,
    width: '95%',
    justifyContent: 'space-around',
    padding: 5,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  midContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
    padding: 5
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  statContainer: {
    width: '95%',
    height: 400,
    justifyContent: 'space-evenly'
  },
  styledText: {
    color: Colors.font
  },
  styledMenu: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 30
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Stats);
