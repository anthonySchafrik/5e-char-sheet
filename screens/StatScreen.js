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

class StatScreen extends Component {
  state = {};

  buildStatBoxes = statTexts =>
    statTexts.map((stat, i) => <StatBox key={i} text={stat} />);

  buildSavingThrowRows = throwsText =>
    throwsText.map((text, i) => <SavingThrowRow key={i} text={text} />);

  render = () => {
    const { buildStatBoxes, buildSavingThrowRows } = this;

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
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  savingRow: {
    backgroundColor: Colors.inputColor
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(StatScreen);
