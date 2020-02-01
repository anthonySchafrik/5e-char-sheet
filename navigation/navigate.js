import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CharacterScreen from '../screens/CharacterScreen';
import CharacterSelectScreen from '../screens/CharacterSelectScreen';
import CreateCharacterScreen from '../screens/CreateCharacterScreen';
import LandingScreen from '../screens/LandingScreen';
import SkillsScreen from '../screens/SkillsScreen';
import SpellListScreen from '../screens/SpellListScreen';
import StatScreen from '../screens/StatScreen';
import Attacks from '../screens/SelectedCharacter/Attacks';
import Stat from '../screens/SelectedCharacter/Stats';
import Equipment from '../screens/SelectedCharacter/Equipment';
import Character from '../screens/SelectedCharacter/Character';

const create = 'Create Character';
const spell = 'Spell List';

const Navigator = createStackNavigator(
  {
    Welcome: LandingScreen,
    Characters: CharacterSelectScreen,
    Character: CharacterScreen,
    [create]: CreateCharacterScreen,
    Stats: StatScreen,
    Skills: SkillsScreen,
    [spell]: SpellListScreen,
    Stat,
    Equipment,
    Attacks,
    Background: Character
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: '#fff'
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Navigator,
    Stat,
    Equipment,
    Attacks,
    Background: Character
  },
  { drawerWidth: 150, drawerPosition: 'left', drawerBackgroundColor: '#b6b6b6' }
);

export default createAppContainer(MainNavigator);
