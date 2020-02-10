import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../../actions/characters';

import Menu from '../../components/Menu';

import Colors from '../../Colors';

const Attacks = ({ attacks, spells, updateSelectedCharacter, navigation }) => {
  useEffect(() => {
    return async () => {
      try {
        console.log('ummounted Attacks');
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.styledMenu}>
        <Menu navigation={navigation} />
      </View>

      <View style={styles.attackContainer}>
        <Text>attack contaiiner</Text>
      </View>

      <View style={styles.attackContainer}>
        <Text>spell contaiiner</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="add spell" />
        <Button title="add attack" />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const { attacks, spells } = state.character.selectedCharacter;
  return { attacks, spells };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background
  },
  styledMenu: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 30
  },
  attackContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    marginVertical: 15
  },
  // spellContainer: { borderColor: Colors.primary, borderWidth: 1 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Attacks);
