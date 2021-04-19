import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Grid, Col } from "react-native-easy-grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCreateCharacter } from "../actions/characters";

import Colors from "../Colors";

class Attacks extends Component {
  state = {
    name: "",
    bonus: "",
    damage: "",
  };

  componentDidMount = () => {
    if (this.props.rowItem) {
      this.setState(this.props.rowItem);
    }
  };

  stateUpdater = (key, value) => this.setState({ [key]: value });

  handleCharacterUpdate = () => {
    const { attacks, updateCreateCharacter } = this.props;
    const { name, bonus, damage } = this.state;

    if (name !== "" && bonus !== "" && damage !== "") {
      updateCreateCharacter({
        text: "attacks",
        update: [...attacks, { name, bonus, damage }],
      });
    }
    return;
  };

  render = () => {
    const { stateUpdater, handleCharacterUpdate } = this;
    const { name, bonus, damage } = this.state;

    return (
      <Grid style={styles.screen}>
        <Col>
          <View style={styles.colContainer}>
            <TextInput
              onChangeText={(text) => stateUpdater("name", text)}
              placeholder="Attack Name"
              placeholderTextColor={Colors.font}
              onEndEditing={handleCharacterUpdate}
              value={name}
              style={styles.styledInput}
            />
          </View>
        </Col>

        <Col>
          <View style={styles.colContainer}>
            <TextInput
              style={styles.styledInput}
              onChangeText={(text) => stateUpdater("bonus", text)}
              placeholder="Bonus"
              placeholderTextColor={Colors.font}
              onEndEditing={handleCharacterUpdate}
              value={bonus}
            />
          </View>
        </Col>

        <Col>
          <View style={styles.colContainer}>
            <TextInput
              style={styles.styledInput}
              onChangeText={(text) => stateUpdater("damage", text)}
              placeholder="Damage"
              placeholderTextColor={Colors.font}
              onEndEditing={handleCharacterUpdate}
              value={damage}
            />
          </View>
        </Col>
      </Grid>
    );
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  colContainer: {
    borderBottomWidth: 1,
    width: "90%",
    borderColor: Colors.primary,
  },
  styledInput: {
    color: Colors.font,
  },
});

const mapStateToProps = (state) => {
  const { attacks } = state.character.createCharacter;
  return { attacks };
};

const mapDispatchToProp = (dispatch) => {
  return bindActionCreators({ updateCreateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProp)(Attacks);
