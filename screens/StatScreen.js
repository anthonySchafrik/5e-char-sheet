import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Colors from '../Colors';

class StatScreen extends Component {
  state = {};
  render = () => {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={80}
        style={styles.screen}
      >
        <View>
          <Text>StatScreen</Text>
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

/* 
  set up state
  add handlers for each stat
  build ui components 
  cross fingers it works
*/
