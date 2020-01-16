import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/LandingScreen';
import CharacterSelectScreen from '../screens/CharacterSelectScreen';

const Navigator = createStackNavigator(
  {
    Welcome: LandingScreen,
    Character: CharacterSelectScreen
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
