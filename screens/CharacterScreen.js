import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../Colors';

const CharacterScreen = ({ navigation }) => {
  const buildTiles = texts => {
    return texts.map((text, i) => {
      return (
        <TouchableNativeFeedback key={i} onPress={() => navigation.push(text)}>
          <View style={styles.tile}>
            <Text>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.tilesContainer}>
          <View>{buildTiles(['Stat', 'Attacks'])}</View>
          <View>{buildTiles(['Equipment ', 'Background'])}</View>
        </View>
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
  },
  tilesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tile: {
    backgroundColor: Colors.underLine,
    height: 100,
    width: 100,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
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
