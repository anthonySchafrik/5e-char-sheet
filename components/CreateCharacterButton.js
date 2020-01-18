import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

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
    backgroundColor: '#666666',
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
