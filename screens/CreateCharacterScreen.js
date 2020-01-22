import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Colors from '../Colors';
import InputComponent from '../components/InputComponent';
import TextFields from '../components/TextFields';

class CreateCharacterScreen extends Component {
  inputComponentBuilder = labels =>
    labels.map((label, i) => <InputComponent label={label} key={i} />);

  textFieldBuilder = labels =>
    labels.map((label, i) => <TextFields label={label} key={i} />);

  render = () => {
    const { inputComponentBuilder, textFieldBuilder } = this;
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.row}>
            {inputComponentBuilder(['Character Name', 'Class'])}
          </View>

          <View style={styles.row}>
            {inputComponentBuilder(['Age', 'Height', 'Weight'])}
          </View>

          <View style={styles.row}>
            {inputComponentBuilder(['Eyes', 'Skin', 'Hair'])}
          </View>

          {textFieldBuilder([
            'Character Appearance',
            'Back Story',
            'Bonds',
            'Flaws',
            'Ideals',
            'Back Story',
            'Allies & Organizations'
          ])}
        </View>
      </ScrollView>
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
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CreateCharacterScreen);
