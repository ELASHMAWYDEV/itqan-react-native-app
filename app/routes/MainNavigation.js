import React, { Component } from "react";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import BottomNavigator from "./BottomNavigator";
import CoursePage from "../screens/SingleCourse/CoursePage";
import CartNavigator from "./CartNavigator";

const Stack = createStackNavigator();

export default class MainNavigation extends Component {
  state = {};

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNavigator"
      >
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CoursePage" component={CoursePage}/>
          <Stack.Screen name="CartNavigator" component={CartNavigator} options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}