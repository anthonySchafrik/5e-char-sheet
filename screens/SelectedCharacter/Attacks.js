import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../../Colors';

const Attacks = ({ attacks, spells }) => {
  useEffect(() => {
    return async () => {
      try {
        console.log('unmoint Attacks');
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify({ attacks })}</Text>
      <Text>{JSON.stringify({ spells })}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const { attacks, spells } = state.character.selectedCharacter;
  return { attacks, spells };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingTop: 30,
    justifyContent: 'space-around'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Attacks);
