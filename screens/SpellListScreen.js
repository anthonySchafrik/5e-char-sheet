import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateCharacter } from '../actions/characters';
import Spell from '../components/Spell';

import Colors from '../Colors';

const SpellListScreen = ({ createCharacter }) => {
  const [rowsToRender, handleRowRender] = useState([]);

  const setRowsToRender = () => {
    handleRowRender([...rowsToRender, rowsToRender.length]);
  };

  const spellRowRender = () => rowsToRender.map(x => <Spell key={x} />);

  return (
    <View style={styles.screen}>
      <View style={styles.spellContainer}>
        <View style={styles.spellInnerContainer}>
          <ScrollView>
            <Spell />
            {spellRowRender()}
          </ScrollView>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.styledButton}>
          <Text onPress={setRowsToRender} style={styles.styledText}>
            Add Spell
          </Text>
        </View>

        <View style={styles.styledButton}>
          <Text
            onPress={() => console.log(createCharacter)}
            style={styles.styledText}
          >
            Create Character
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround
  },
  styledButton: {
    height: 40,
    width: 120,
    borderRadius: 10,
    backgroundColor: Colors.underLine,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  spellContainer: { height: 540 },
  styledText: {
    color: 'white'
  },
  spellInnerContainer: { height: 300, borderColor: 'black', borderWidth: 1 }
});

const mapStateToProps = state => {
  const { createCharacter } = state.character;
  return { createCharacter };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(SpellListScreen);
