import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CharacterScreen from '../screens/CharacterScreen';
import CharacterSelectScreen from '../screens/CharacterSelectScreen';
import CreateCharacterScreen from '../screens/CreateCharacterScreen';
import LandingScreen from '../screens/LandingScreen';
import SkillsScreen from '../screens/SkillsScreen';
import StatScreen from '../screens/StatScreen';

const create = 'Create Character';

const Navigator = createStackNavigator(
  {
    Welcome: LandingScreen,
    Characters: CharacterSelectScreen,
    Character: CharacterScreen,
    [create]: CreateCharacterScreen,
    Stats: StatScreen,
    Skills: SkillsScreen
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

export default createAppContainer(Navigator);
