import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { Grid, Col } from "react-native-easy-grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateSelectedCharacter } from "../../actions/characters";

import Menu from "../../components/Menu";
import Attacks from "../../components/Attacks";
import Colors from "../../Colors";

const SelectedAttacks = ({
  attacks,
  spells,
  updateSelectedCharacter,
  navigation,
}) => {
  const [rowsToRender, handleRowRender] = useState([]);

  useEffect(() => {
    return async () => {
      try {
        // await AsyncStorage.setItem(name, JSON.stringify(selectedCharacter));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const setRowsToRender = () => {
    handleRowRender([...rowsToRender, rowsToRender.length]);
  };

  const attackRowRender = () =>
    // rowsToRender.map((x) => <Attacks key={x} />);
    attacks.map((x) => <Attacks key={x} rowItem={x} />);

  return (
    <View style={styles.screen}>
      <View style={styles.styledMenu}>
        <Menu navigation={navigation} />
      </View>

      <View style={styles.attSpellContainer}>
        <ScrollView>
          <Grid>
            <Col>
              <Text style={{ color: Colors.font }}>Name</Text>
            </Col>

            <Col>
              <Text style={{ color: Colors.font }}>ATK Bonus</Text>
            </Col>

            <Col>
              <Text style={{ color: Colors.font }}>Damage/Type</Text>
            </Col>
          </Grid>

          {attackRowRender()}
        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.styledButton}>
          <Text style={{ color: Colors.font }}>Add Attack</Text>
        </View>

        <View style={styles.styledButton}>
          <Text style={{ color: Colors.font }}>Add Spell</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { attacks, spells } = state.character.selectedCharacter;
  return { attacks, spells };
};

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators({ updateSelectedCharacter }, dispatch);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  styledMenu: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingTop: 30,
  },
  attackContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    marginVertical: 15,
  },
  // spellContainer: { borderColor: Colors.primary, borderWidth: 1 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  attSpellContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 200,
    width: 395,
    marginTop: 8,
    paddingLeft: 15,
  },
  styledButton: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProp)(SelectedAttacks);
