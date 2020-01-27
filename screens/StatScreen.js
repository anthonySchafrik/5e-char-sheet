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

import Colors from '../Colors';
import StatBox from '../components/StatBox';
import StatRectangle from '../components/StatRectangle';
import SavingThrowRow from '../components/SavingThrowRow';
import InputBox from '../components/InputBox';
import StyledButton from '../components/StyledButton';

class StatScreen extends Component {
  state = {};

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
      navScreenPush
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
                <Text style={{}}>Saving Throws</Text>
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
                  <Text>Hit Points Maximum</Text>
                  <TextInput
                    style={styles.styledTextInput}
                    placeholder="Mult"
                    placeholderTextColor="black"
                  />
                </View>
                <View style={styles.row}>
                  <Text>Hit Dice</Text>
                  <TextInput
                    style={styles.styledTextInput}
                    placeholder="Mult"
                    placeholderTextColor="black"
                  />
                </View>
              </View>

              <StyledButton
                style={styles.styledButton}
                navScreenPush={navScreenPush}
                text="Skills"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  savingRow: {
    backgroundColor: Colors.inputColor,
    alignItems: 'center'
  },
  boxRows: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hitRow: {
    backgroundColor: Colors.inputColor
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingLeft: 5,
    paddingRight: 5
  },
  styledTextInput: {
    borderBottomColor: Colors.underLine,
    borderBottomWidth: 1
  },
  styledButton: {
    marginVertical: 90,
    backgroundColor: Colors.inputColor
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(StatScreen);
