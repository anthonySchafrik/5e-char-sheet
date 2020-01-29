import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity
} from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';

import Attacks from '../components/Attacks';
import SkillRow from '../components/SkillRow';
import StyledButton from '../components/StyledButton';
import Colors from '../Colors.js';

const SkillsScreen = ({ navigation }) => {
  const [rowsToRender, handleRowRender] = useState([]);

  const skillRowBuilder = skills =>
    skills.map((skill, i) => {
      const { text, subText } = skill;
      return <SkillRow text={text} subText={subText} key={i} />;
    });

  const setRowsToRender = () => {
    handleRowRender([...rowsToRender, rowsToRender.length]);
  };

  const attackRowRender = () => rowsToRender.map(x => <Attacks key={x} />);

  const navScreenPush = screen => navigation.navigate(screen);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={80}
      style={styles.screen}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rows}>
            {skillRowBuilder([
              { text: 'Acrobatics', subText: 'Dex' },
              { text: 'Arcana', subText: 'Int' },
              { text: 'Deception', subText: 'Cha' },
              { text: 'Insight', subText: 'Wis' },
              { text: 'Investigation', subText: 'Int' },
              { text: 'Nature', subText: 'Int' },
              { text: 'Performance', subText: 'Cha' },
              { text: 'Religion', subText: 'Int' },
              { text: 'Stealth', subText: 'Dex' }
            ])}
          </View>

          <View style={styles.rows}>
            {skillRowBuilder([
              { text: 'Animal Handling', subText: 'Wis' },
              { text: 'Athletics', subText: 'Str' },
              { text: 'History', subText: 'Int' },
              { text: 'Intimidation', subText: 'Cha' },
              { text: 'Medicine', subText: 'Wis' },
              { text: 'Perception', subText: 'Wis' },
              { text: 'Persuasion', subText: 'Cha' },
              { text: 'Sleight of Hand', subText: 'Dex' },
              { text: 'Survival', subText: 'Wis' }
            ])}
          </View>
        </View>

        <View style={styles.attackContainer}>
          <Text>Attacks & SpellCasting</Text>
          <View style={styles.attSpellContainer}>
            <ScrollView>
              <Grid>
                <Col>
                  <Text>Name</Text>
                </Col>

                <Col>
                  <Text>ATK Bonus</Text>
                </Col>

                <Col>
                  <Text>Damage/Type</Text>
                </Col>
              </Grid>

              {attackRowRender()}
            </ScrollView>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.styledButton}>
              <Text style={{ color: 'white', fontSize: 13 }}>
                Create Character
              </Text>
            </View>
            <View style={styles.styledButton}>
              <Text onPress={setRowsToRender} style={{ color: 'white' }}>
                Add Attack
              </Text>
            </View>
            <StyledButton
              style={{ width: 100 }}
              text="Spell List"
              navScreenPush={navScreenPush}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5
  },
  rows: {
    width: '48%'
  },
  attackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  attSpellContainer: {
    borderColor: Colors.underLine,
    borderWidth: 1,
    height: 200,
    width: 395,
    marginTop: 8,
    paddingLeft: 15
  },
  styledButton: {
    height: 40,
    width: 100,
    borderRadius: 10,
    backgroundColor: Colors.underLine,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default SkillsScreen;