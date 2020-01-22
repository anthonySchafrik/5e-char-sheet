import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import Colors from '../Colors';

const CreateCharacterButton = props => {
  const { navScreenPush } = props;
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => navScreenPush('Create Character')}
        >
          Create Character
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.underLine,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    borderRadius: 10
  },
  text: {
    color: 'white'
  }
});

export default CreateCharacterButton;
