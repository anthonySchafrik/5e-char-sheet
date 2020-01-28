import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../Colors';

const Spell = () => {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.rowContainer}>
        <View>
          <Text>Spellcasting class</Text>
          <TextInput style={styles.styledInput} />
        </View>
        <View>
          <Text>Spellingcasting Ability</Text>
          <TextInput style={styles.styledInput} />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text>Spell Save DC</Text>
          <TextInput style={styles.styledInput} />
        </View>
        <View>
          <Text>Spell Attack Bonus</Text>
          <TextInput style={styles.styledInput} />
        </View>
      </View>

      <View style={styles.spellDescription}>
        <Text>Spell Description</Text>
        <TextInput
          style={{ ...styles.styledInput, borderWidth: 1 }}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  styledInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
  },
  spellDescription: {
    width: '85%',
    paddingLeft: '10%',
    marginVertical: 8
  }
});

export default Spell;
