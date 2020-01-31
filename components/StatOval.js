import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../Colors';

const StatOval = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>title</Text>
      <View style={styles.statRow}>
        <View style={styles.center}>
          <Text>Score</Text>
          <TextInput value="12" />
        </View>

        <View style={styles.center}>
          <Text>Multiplier</Text>
          <TextInput value="12" />
        </View>

        <View style={styles.center}>
          <Text>Save</Text>
          <TextInput value="12" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.underLine,
    alignItems: 'center',
    width: 170,
    borderRadius: 40
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 70,
    alignItems: 'center'
  },
  styledText: {
    marginTop: 2
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StatOval;
