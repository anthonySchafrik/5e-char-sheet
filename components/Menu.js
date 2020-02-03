import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';

import Colors from '../Colors';

const Menu = ({ navigation }) => {
  return (
    <View>
      <Ionicons
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        name="md-menu"
        size={35}
        color={Colors.primary}
      />
    </View>
  );
};

export default Menu;
