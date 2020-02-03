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
import EquipmentComponent from '../components/EquipmentComponent';
import StyledButton from '../components/StyledButton';

class CreateCharacterScreen extends Component {
  inputComponentBuilder = labels =>
    labels.map((label, i) => <InputComponent text={label} key={i} />);

  textFieldBuilder = labels =>
    labels.map((label, i) => <TextFields text={label} key={i} />);

  navScreenPush = screen => {
    const { navigation } = this.props;

    navigation.push(screen);
  };

  render = () => {
    const { inputComponentBuilder, textFieldBuilder, navScreenPush } = this;

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
                'Allies & Organizations',
                'Treasure'
              ])}

              <EquipmentComponent />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <StyledButton navScreenPush={navScreenPush} text="Stats" />
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
    alignItems: 'center',
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 15
  }
});

const mapStateToProps = state => {
  const { createCharacter } = state.character;
  return { createCharacter };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CreateCharacterScreen);
