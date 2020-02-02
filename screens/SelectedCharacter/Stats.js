import React, { useState, useEffect, useRef, useCallback } from 'react';
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

import Colors from '../../Colors';
import store from '../../store';

const Stats = ({ stat, updateSelectedCharacter, selectedCharacter }) => {
  const [currentStats, handleStatsUpdate] = useState({
    ...stat
  });

  const {
    stats,
    proficiency,
    savingThrows,
    armorClass,
    initiative,
    speed,
    hp,
    hd
  } = currentStats;

  const setStatUpdates = (key, value) => {
    handleStatsUpdate({
      ...currentStats,
      [key]: value
    });
  };

  const handleUpdateCharacter = (key, value) => () =>
    updateSelectedCharacter({ key, value });

  useEffect(() => {
    return async () => {
      const { selectedCharacter } = store.getState().character;
      const { 'character name': name } = selectedCharacter;

      try {
        console.log('ummounted', selectedCharacter);
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          {/* spacing to help read */}
          <View style={styles.box}>
            <Text>HP</Text>
            <TextInput
              value={hp}
              onChangeText={text => setStatUpdates('hp', text)}
              onEndEditing={handleUpdateCharacter('hit points maximum', hp)}
            />
          </View>

          <View style={styles.squContainer}>
            <View style={styles.row}>
              <Text>Initiative</Text>
              <TextInput
                value={initiative}
                onChangeText={text => setStatUpdates('initiative', text)}
                onEndEditing={handleUpdateCharacter('initiative', initiative)}
              />
            </View>

            <View style={styles.row}>
              <Text>Speed</Text>
              <TextInput
                value={speed}
                onChangeText={text => setStatUpdates('speed', text)}
                onEndEditing={handleUpdateCharacter('speed', speed)}
              />
            </View>
          </View>

          <View style={styles.midContainer}>
            <View style={styles.centered}>
              <Text>Hit Dice</Text>
              <TextInput
                value={hd}
                onChangeText={text => setStatUpdates('hd', text)}
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
                style={{ paddingLeft: armorClass.length > 1 ? 5 : 14 }}
                value={armorClass}
                onChangeText={text => setStatUpdates('armorClass', text)}
                onEndEditing={handleUpdateCharacter('armor class', armorClass)}
              />
            </ImageBackground>

            <View style={styles.centered}>
              <Text>Proficiency</Text>
              <TextInput
                value={proficiency}
                onChangeText={text => setStatUpdates('proficiency', text)}
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
                multiplier={stats.strength.muli}
                save={savingThrows.strength.muli}
                proficient={savingThrows.strength.proficient}
              />
              <StatOval
                stat="dexterity"
                score={stats.dexterity.stat}
                multiplier={stats.dexterity.muli}
                save={savingThrows.dexterity.muli}
                proficient={savingThrows.dexterity.proficient}
              />
            </View>

            <View style={styles.row}>
              <StatOval
                stat="intelligence"
                score={stats.intelligence.stat}
                multiplier={stats.intelligence.muli}
                save={savingThrows.intelligence.muli}
                proficient={savingThrows.intelligence.proficient}
              />
              <StatOval
                stat="charisma"
                score={stats.charisma.stat}
                multiplier={stats.charisma.muli}
                save={savingThrows.charisma.muli}
                proficient={savingThrows.charisma.proficient}
              />
            </View>

            <View style={styles.row}>
              <StatOval
                stat="wisdom"
                score={stats.wisdom.stat}
                multiplier={stats.wisdom.muli}
                save={savingThrows.wisdom.muli}
                proficient={savingThrows.wisdom.proficient}
              />
              <StatOval
                stat="constitution"
                score={stats.constitution.stat}
                multiplier={stats.constitution.muli}
                save={savingThrows.constitution.muli}
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
  const { selectedCharacter } = state.character;

  return {
    stat: {
      stats,
      proficiency,
      armorClass,
      initiative,
      speed,
      hp,
      hd,
      name,
      savingThrows
    },
    selectedCharacter
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround
  },
  container: {
    paddingTop: 30,
    alignItems: 'center'
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: Colors.underLine,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    borderRadius: 10
  },
  squContainer: {
    backgroundColor: Colors.underLine,
    height: 75,
    width: 400,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Stats);
