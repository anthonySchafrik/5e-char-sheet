import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'react-navigation-drawer';

const Menu = ({ navigation }) => {
  return (
    <View>
      <Ionicons
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        name="md-menu"
        size={24}
        color="black"
      />
    </View>
  );
};

export default Menu;
