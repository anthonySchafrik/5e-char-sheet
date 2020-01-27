import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import Colors from '../Colors.js';

const SkillsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Skill Screen Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround
  }
});

export default SkillsScreen;
