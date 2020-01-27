import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';

import SkillRow from '../components/SkillRow';

import Colors from '../Colors.js';

const SkillsScreen = () => {
  const skillRowBuilder = skills =>
    skills.map((skill, i) => {
      const { text, subText } = skill;
      return <SkillRow text={text} subText={subText} key={i} />;
    });

  return (
    <View style={styles.screen}>
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backGround,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rows: {
    width: '48%'
  }
});

export default SkillsScreen;
