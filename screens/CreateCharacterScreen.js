import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputComponent from '../components/InputComponent';
import Colors from '../Colors';

class CreateCharacterScreen extends Component {
  render = () => {
    return (
      <ScrollView style={styles.screen}>
        <View>
          <View style={styles.row}>
            <InputComponent label="Character Name" />
            <InputComponent label="Class" />
          </View>

          <View style={styles.row}>
            <InputComponent label="Age" />
            <InputComponent label="Height" />
            <InputComponent label="Weight" />
          </View>

          <View style={styles.row}>
            <InputComponent label="Eyes" />
            <InputComponent label="Skin" />
            <InputComponent label="Hair" />
          </View>
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
  row: {
    flexDirection: 'row',
    marginVertical: 10
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CreateCharacterScreen);
