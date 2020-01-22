import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
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
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={80}
        style={styles.screen}
      >
        <ScrollView>
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
            <View style={styles.column}>
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
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CreateCharacterScreen);
