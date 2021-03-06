import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateCreateCharacter } from '../actions/characters';

import Colors from '../Colors';
import StatBox from '../components/StatBox';
import StatRectangle from '../components/StatRectangle';
import SavingThrowRow from '../components/SavingThrowRow';
import InputBox from '../components/InputBox';
import StyledButton from '../components/StyledButton';

class StatScreen extends Component {
  state = { 'hit points maximum': '', 'hit dice': '' };

  handleStateUpdate = (key, value) => {
    this.setState({ [key]: value });
  };

  handleCharUpdate = key => () => {
    const { updateCreateCharacter } = this.props;
    const { state } = this;

    const value = state[key];
    updateCreateCharacter({ text: key, update: value });
  };

  buildStatBoxes = statTexts =>
    statTexts.map((stat, i) => <StatBox key={i} text={stat} />);

  buildSavingThrowRows = throwsText =>
    throwsText.map((text, i) => <SavingThrowRow key={i} text={text} />);

  buildInputBoxes = boxTexts =>
    boxTexts.map((x, i) => {
      const { text, style } = x;

      return <InputBox text={text} key={i} style={style} />;
    });

  navScreenPush = screen => {
    const { navigation } = this.props;

    navigation.push(screen);
  };

  render = () => {
    const {
      buildStatBoxes,
      buildSavingThrowRows,
      buildInputBoxes,
      navScreenPush,
      handleStateUpdate,
      handleCharUpdate
    } = this;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={80}
        style={styles.screen}
      >
        <ScrollView>
          <View style={styles.container}>
            <View>
              {buildStatBoxes([
                'Strength',
                'Dexterity',
                'Constitution',
                'Intelligence',
                'Wisdom',
                'Charisma'
              ])}
            </View>

            <View>
              <StatRectangle text="Inspiration" outline="box" />
              <StatRectangle text="Proficiency Bonus" outline="circle" />

              <View style={styles.savingRow}>
                {buildSavingThrowRows([
                  'Strength',
                  'Dexterity',
                  'Constitution',
                  'Intelligence',
                  'Wisdom',
                  'Charisma'
                ])}
                <Text style={{ color: Colors.font }}>Saving Throws</Text>
              </View>

              <View style={styles.boxRows}>
                {buildInputBoxes([
                  { text: 'Armor Class', style: { paddingLeft: 15 } },
                  { text: 'Initiative', style: {} },
                  { text: 'Speed', style: {} }
                ])}
              </View>

              <View style={styles.hitRow}>
                <View style={styles.row}>
                  <Text style={{ color: Colors.font }}>Hit Points Maximum</Text>
                  <TextInput
                    style={styles.styledTextInput}
                    placeholder="Mult"
                    onChangeText={text =>
                      handleStateUpdate('hit points maximum', text)
                    }
                    onEndEditing={handleCharUpdate('hit points maximum')}
                  />
                </View>
                <View style={styles.row}>
                  <Text style={{ color: Colors.font }}>Hit Dice</Text>
                  <TextInput
                    style={styles.styledTextInput}
                    placeholder="Mult"
                    onChangeText={text => handleStateUpdate('hit dice', text)}
                    onEndEditing={handleCharUpdate('hit dice')}
                  />
                </View>
              </View>

              <View style={{ paddingLeft: 25 }}>
                <StyledButton
                  style={styles.styledButton}
                  navScreenPush={navScreenPush}
                  text="Skills"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  savingRow: {
    backgroundColor: Colors.secondary,
    alignItems: 'center'
  },
  boxRows: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hitRow: {
    paddingTop: 3,
    backgroundColor: Colors.secondary
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  styledTextInput: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1
  },
  styledButton: {
    marginTop: 30,
    backgroundColor: Colors.secondary
  }
});

const mapStateToProps = state => {
  const { createCharacter } = state.character;
  return { createCharacter };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(StatScreen);
