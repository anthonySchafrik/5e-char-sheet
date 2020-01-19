import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputComponent from '../components/InputComponent';
import Colors from '../Colors';
import TextFields from '../components/TextFields';

class CreateCharacterScreen extends Component {
  render = () => {
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
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

          <TextFields label="Character Appearance" />
          <TextFields label="Back Story" />
          <TextFields label="Bonds" />
          <TextFields label="Flaws" />
          <TextFields label="Ideals" />
          <TextFields label="Back Story" />
          <TextFields label="Character Appearance" />
          <TextFields label="Allies & Organizations" />
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

/* 
need to make that jsx a arr then map over that
*/
