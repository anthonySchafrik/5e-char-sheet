import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  ScrollView
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Colors from '../Colors';
import StatBox from '../components/StatBox';
import StatRectangle from '../components/StatRectangle';
import SavingThrowRow from '../components/SavingThrowRow';
import InputBox from '../components/InputBox';

class StatScreen extends Component {
  state = {};

  buildStatBoxes = statTexts =>
    statTexts.map((stat, i) => <StatBox key={i} text={stat} />);

  buildSavingThrowRows = throwsText =>
    throwsText.map((text, i) => <SavingThrowRow key={i} text={text} />);

  buildInputBoxes = boxTexts =>
    boxTexts.map((text, i) => <InputBox text={text} key={i} />);

  render = () => {
    const { buildStatBoxes, buildSavingThrowRows, buildInputBoxes } = this;

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
                {buildInputBoxes(['Armor Class', 'Initiative', 'Speed'])}
              </View>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(StatScreen);
