import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { setSelectCharacter } from '../actions/characters';

const CharacterSelectScreen = props => {
  const { selectCharacter, setSelectCharacter } = props;

  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button
        title="next"
        // onPress={() => {
        //   props.navigation.navigate('');
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  const { selectCharacter } = state.character;
  return {
    selectCharacter
  };
};

export default connect(mapStateToProps, { setSelectCharacter })(
  CharacterSelectScreen
);
