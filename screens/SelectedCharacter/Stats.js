import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../../Colors';
import { TextInput } from 'react-native-gesture-handler';

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
  skills
}) => {
  return (
    <View style={styles.screen}>
      {/*  */}
      <View style={styles.box}>
        <Text>HP</Text>
        <TextInput value={hp} />
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
    </View>
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
    skills
  } = state.character.selectCharacter;

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
    skills
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingTop: 30,

    alignItems: 'center'
  },
  box: {
    width: 75,
    height: 75,
    backgroundColor: Colors.underLine,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5
  },
  squContainer: {
    backgroundColor: Colors.underLine,
    height: 75,
    width: 400,
    justifyContent: 'space-around',
    padding: 5
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
  styledTextInput: {
    paddingLeft: 5
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Stats);
