import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../../Colors';

const Equipment = ({ treasure, equipment }) => {
  useEffect(() => {
    return async () => {
      try {
        console.log('unmoint Equipment');
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{JSON.stringify({ treasure })}</Text>
      <Text>{JSON.stringify({ equipment })}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const { treasure, equipment } = state.character.selectedCharacter;
  return { treasure, equipment };
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

export default connect(mapStateToProps, mapDispatchToProp)(Equipment);
