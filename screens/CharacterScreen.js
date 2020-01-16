import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CharacterScreen = props => {
  const { selectCharacter } = props;

  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify(selectCharacter)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9C9C9C'
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
