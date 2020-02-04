import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../../components/Menu';
import Colors from '../../Colors';

const Equipment = ({ treasure, equipment, navigation }) => {
  useEffect(() => {
    return async () => {
      try {
        console.log('ummounted Equipment');
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <View style={styles.screen}>
      <Menu navigation={navigation} />
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
    backgroundColor: Colors.background,
    paddingTop: 30,
    justifyContent: 'space-around'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Equipment);
