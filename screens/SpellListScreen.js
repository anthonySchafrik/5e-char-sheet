import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../Colors';

const SpellListScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the SpellListScreen component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround
  }
});

export default SpellListScreen;
