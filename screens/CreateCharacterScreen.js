import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CreateCharacterScreen extends Component {
  render = () => {
    return (
      <View style={styles.screen}>
        <Text>This is the Create Character Screen class.</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CreateCharacterScreen);
