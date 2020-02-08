import React, { useState, useEffect, useReducer } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSelectedCharacter } from '../../actions/characters';

import Menu from '../../components/Menu';

import Colors from '../../Colors';
import store from '../../store';

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
      const { selectedCharacter } = store.getState().character;
      const { 'character name': name } = selectedCharacter;

      try {
        await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const handleUpdateCharacter = (key, value) => () =>
    updateSelectedCharacter({ key, value });

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
            onEndEditing={handleUpdateCharacter('treasure', updatedTreasure)}
          />
        </ScrollView>
      </View>

      <ScrollView style={{ width: '100%' }}>
        <View
          style={{
            ...styles.row,
            ...styles.rowContainer
          }}
        >
          <View>
            <View style={styles.row}>
              <Text>Cp</Text>
              <TextInput
                onChangeText={text =>
                  equipmentDispatch({
                    type: 'update',
                    payload: { key: 'cp', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'equipment',
                  updatedEquipment
                )}
                value={cp}
                style={styles.rowInput}
              />
            </View>

            <View style={styles.row}>
              <Text>Sp</Text>
              <TextInput
                onChangeText={text =>
                  equipmentDispatch({
                    type: 'update',
                    payload: { key: 'sp', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'equipment',
                  updatedEquipment
                )}
                value={sp}
                style={styles.rowInput}
              />
            </View>

            <View style={styles.row}>
              <Text>Ep</Text>
              <TextInput
                onChangeText={text =>
                  equipmentDispatch({
                    type: 'update',
                    payload: { key: 'ep', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'equipment',
                  updatedEquipment
                )}
                value={ep}
                style={styles.rowInput}
              />
            </View>

            <View style={styles.row}>
              <Text>Gp</Text>
              <TextInput
                onChangeText={text =>
                  equipmentDispatch({
                    type: 'update',
                    payload: { key: 'gp', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'equipment',
                  updatedEquipment
                )}
                value={gp}
                style={styles.rowInput}
              />
            </View>

            <View style={styles.row}>
              <Text>Pp</Text>
              <TextInput
                onChangeText={text =>
                  equipmentDispatch({
                    type: 'update',
                    payload: { key: 'pp', value: text }
                  })
                }
                onEndEditing={handleUpdateCharacter(
                  'equipment',
                  updatedEquipment
                )}
                value={pp}
                style={styles.rowInput}
              />
            </View>
          </View>
          <TextInput
            value={text}
            multiline={true}
            onChangeText={text =>
              equipmentDispatch({
                type: 'update',
                payload: { key: 'text', value: text }
              })
            }
            onEndEditing={handleUpdateCharacter('equipment', updatedEquipment)}
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
    height: 160,
    alignSelf: 'center'
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
