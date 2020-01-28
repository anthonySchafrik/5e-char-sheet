import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Spell from '../components/Spell';

import Colors from '../Colors';

const SpellListScreen = () => {
  const [rowsToRender, handleRowRender] = useState([]);

  const setRowsToRender = () => {
    handleRowRender([...rowsToRender, rowsToRender.length]);
  };

  const spellRowRender = () => rowsToRender.map(x => <Spell key={x} />);

  return (
    <View style={styles.screen}>
      <View style={styles.spellContainer}>
        <View style={{ height: 400, borderColor: 'black', borderWidth: 1 }}>
          <ScrollView>
            <Spell />
            {spellRowRender()}
          </ScrollView>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.styledButton}>
          <Text onPress={setRowsToRender} style={{ color: 'white' }}>
            Add Spell
          </Text>
        </View>

        <View style={styles.styledButton}>
          <Text style={{ color: 'white' }}>Create Character</Text>
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
  spellContainer: { height: 640 }
});

export default SpellListScreen;
