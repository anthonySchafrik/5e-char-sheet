import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../../actions/characters';

import StatOval from '../../components/StatOval';

import Colors from '../../Colors';

const Stats = ({
  stats,
  inspiration,
  proficiency,
  savingThrows,
  armorClass,
  initiative,
  speed,
  hp,
  hd,
  skills,
  updateCreateCharacter,
  selectedCharacter
}) => {
  const [currentHp, handleHpUpdate] = useState(hp);

  useEffect(() => {
    return () => {
      console.log(selectedCharacter['hit points maximum']);
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
              value={currentHp}
              onChangeText={text => handleHpUpdate(text)}
              onEndEditing={() =>
                updateCreateCharacter({
                  text: 'hit points maximum',
                  update: currentHp
                })
              }
            />
          </View>

          <View style={styles.squContainer}>
            <View style={styles.row}>
              <Text>Initiative</Text>
              <TextInput value={initiative} />
            </View>

            <View style={styles.row}>
              <Text>Speed</Text>
              <TextInput value={speed} />
            </View>
          </View>

          <View style={styles.midContainer}>
            <View style={styles.centered}>
              <Text>Hit Dice</Text>
              <TextInput value={hd} />
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
              />
            </ImageBackground>

            <View style={styles.centered}>
              <Text>Proficiency</Text>
              <TextInput value={proficiency} />
            </View>
          </View>

          <View style={styles.statContainer}>
            <View style={styles.row}>
              <StatOval />
              <StatOval />
            </View>

            <View style={styles.row}>
              <StatOval />
              <StatOval />
            </View>

            <View style={styles.row}>
              <StatOval />
              <StatOval />
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
    inspiration,
    'proficiency bonus': proficiency,
    savingThrows,
    'armor class': armorClass,
    initiative,
    speed,
    'hit points maximum': hp,
    'hit dice': hd,
    skills,
    'character name': name
  } = state.character.selectedCharacter;
  const { selectedCharacter } = state.character;

  return {
    stats,
    inspiration,
    proficiency,
    savingThrows,
    armorClass,
    initiative,
    speed,
    hp,
    hd,
    skills,
    name,
    selectedCharacter
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
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
