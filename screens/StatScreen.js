import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Colors from '../Colors';
import StatBox from '../components/StatBox';

class StatScreen extends Component {
  state = {};

  buildStatBoxes = statTexts =>
    statTexts.map((stat, i) => <StatBox key={i} text={stat} />);

  render = () => {
    const { buildStatBoxes } = this;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={80}
        style={styles.screen}
      >
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
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(StatScreen);
