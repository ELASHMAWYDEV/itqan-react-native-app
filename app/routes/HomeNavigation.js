import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import {
  HomePage
} from "../screens/HomeScreens/index";


const Stack = createStackNavigator();

export default class HomeNavigation extends Component {
  state = {};

  render() {
    return (
      <Stack.Navigator
        initialRouteName="HomePage"
      >
        <Stack.Screen name="HomePage" component={HomePage} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    );
  }
}