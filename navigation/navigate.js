import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';

const Navigator = createStackNavigator({
  Welcome: LandingScreen,
  Home: HomeScreen
});

export default createAppContainer(Navigator);
