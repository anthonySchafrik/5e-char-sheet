import React, { useState, useEffect, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../../actions/characters';

import Menu from '../../components/Menu';
import Colors from '../../Colors';

const equipmentReducer = (state, action) => {
  const { type, payload } = action;
  const { key, value } = payload;

  switch (type) {
    case 'update':
      return {
        ...state,
        [key]: value
      };
    default:
      throw new Error();
  }
};

const Equipment = ({
  treasure,
  equipment,
  navigation,
  updateSelectedCharacter
}) => {
  const [updatedTreasure, handleUpdatedTreasure] = useState(treasure);

  const [updatedEquipment, equipmentDispatch] = useReducer(
    equipmentReducer,
    equipment
  );

  const { cp, sp, ep, gp, pp, text } = updatedEquipment;

  useEffect(() => {
    return async () => {
      try {
        console.log('ummounted Equipment');
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.styledMenu}>
        <Menu navigation={navigation} />
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.styledText}>Treasure</Text>
        <ScrollView style={{ width: '100%' }}>
          <TextInput
            multiline={true}
            style={styles.styledTextField}
            value={updatedTreasure}
            onChangeText={text => handleUpdatedTreasure(text)}
            onEndEditing={() =>
              updateSelectedCharacter({
                key: 'treasure',
                value: updatedTreasure
              })
            }
          />
        </ScrollView>
      </View>

      <ScrollView>
        <View style={{ ...styles.row, ...styles.rowContainer }}>
          <View>
            <View style={styles.row}>
              <Text>Cp</Text>
              <TextInput value={cp} style={styles.rowInput} />
            </View>

            <View style={styles.row}>
              <Text>Sp</Text>
              <TextInput value={sp} style={styles.rowInput} />
            </View>

            <View style={styles.row}>
              <Text>Ep</Text>
              <TextInput value={ep} style={styles.rowInput} />
            </View>

            <View style={styles.row}>
              <Text>Gp</Text>
              <TextInput value={gp} style={styles.rowInput} />
            </View>

            <View style={styles.row}>
              <Text>Pp</Text>
              <TextInput value={pp} style={styles.rowInput} />
            </View>
          </View>
          <TextInput
            value={text}
            multiline={true}
            style={styles.equipmentTextField}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  const { treasure, equipment } = state.character.selectedCharacter;
  return { treasure, equipment };
};

const mapDispatchToProp = dispatch => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 30,
    alignItems: 'center'
  },
  topContainer: {
    width: '95%',
    height: 200,
    alignItems: 'center',
    marginBottom: 60
  },
  styledText: {
    color: Colors.font,
    marginVertical: 5
  },
  styledTextField: {
    color: Colors.font,
    borderWidth: 1,
    borderColor: Colors.secondary,
    padding: 5,
    width: '95%'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowInput: {
    color: Colors.font,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    paddingLeft: 5
  },
  rowContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderColor: Colors.secondary,
    borderWidth: 1,
    width: '95%',
    height: 160
  },
  styledMenu: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingTop: 10
  },
  equipmentTextField: {
    color: Colors.font,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    width: '60%'
  }
});

export default connect(mapStateToProps, mapDispatchToProp)(Equipment);
