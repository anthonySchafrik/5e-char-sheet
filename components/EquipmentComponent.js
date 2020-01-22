import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../Colors';

const EquipmentComponent = props => {
  const buildRowContainer = labels =>
    labels.map((label, i) => {
      return (
        <View key={i} style={styles.row}>
          <Text>{label}</Text>
          <TextInput style={styles.rowInput} multiline={true} />
        </View>
      );
    });

  return (
    <View style={styles.screen}>
      <View>
        <Text>Equipment</Text>
      </View>
      <View style={styles.container}>
        {/* left column */}
        <View style={styles.rowContainer}>
          {buildRowContainer(['CP', 'SP', 'EP', 'GP', 'PP'])}
        </View>

        {/* Right column */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} multiline={true} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '85%',
    paddingBottom: 15
  },
  container: {
    width: '100%',
    borderColor: Colors.underLine,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
  },
  rowContainer: {
    paddingBottom: 5,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60
  },
  inputContainer: {
    width: '75%'
  },
  textInput: {
    borderColor: Colors.underLine,
    borderBottomWidth: 1
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
