import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../Colors';

const EquipmentComponent = props => {
  const { selectCharacter } = props;

  return (
    <View style={styles.screen}>
      <View>
        <Text>Equipment</Text>
      </View>
      <View style={styles.container}>
        {/* Start of left column */}
        <View>
          <View style={styles.row}>
            <Text>CP</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
          <View style={styles.row}>
            <Text>SP</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
          <View style={styles.row}>
            <Text>EP</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
          <View style={styles.row}>
            <Text>GP</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
          <View style={styles.row}>
            <Text>PP</Text>
            <TextInput style={styles.textInput} multiline={true} />
          </View>
        </View>
        {/* end of left column */}

        <View style={{ width: '75%' }}>
          <TextInput
            style={{
              borderColor: '#666666',
              borderBottomWidth: 1
            }}
            multiline={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '85%'
  },
  container: {
    width: '100%',

    borderColor: '#666666',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: '#666666',
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60
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

export default connect(mapStateToProps, mapDispatchToProp)(EquipmentComponent);
