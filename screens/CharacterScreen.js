import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../Colors';

const CharacterScreen = props => {
  const { selectCharacter } = props;

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>{JSON.stringify(selectCharacter)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.backGround
  }
});

const mapStateToProps = state => {
  const { selectCharacter } = state.character;
  return {
    selectCharacter
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(CharacterScreen);
