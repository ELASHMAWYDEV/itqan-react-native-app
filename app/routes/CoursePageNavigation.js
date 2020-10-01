import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";


//Import


const Stack = createStackNavigator();

export default class CoursePageNavigation extends Component {

  render() {
    return (
      <View>
        <Text> CoursePageNavigation </Text>
      </View>
    );
  }
}
