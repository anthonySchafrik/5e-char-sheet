import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StyledButton from '../components/StyledButton';

import Colors from '../Colors';

const CharacterScreen = ({ navigation }) => {
  const buildTiles = texts => {
    return texts.map((text, i) => {
      return (
        <TouchableNativeFeedback
          key={i}
          onPress={() => navigation.navigate(text)}
        >
          <View style={styles.tile}>
            <Text>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      );
    });
  };

  const navReplace = () => {
    navigation.replace('Characters');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.tilesContainer}>
        <View>{buildTiles(['Stat', 'Attacks'])}</View>
        <View>{buildTiles(['Equipment', 'Background'])}</View>
      </View>
      <StyledButton text="Characters" navScreenPush={navReplace} />
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
  const { selectedCharacter } = state.character;
  return {
    selectedCharacter
  };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(CharacterScreen);
