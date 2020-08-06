import React, { Component } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  state = {
    fontLoaded: false,
  };
  componentWillMount = () => {
    Font.loadAsync({
      "bein-normal": require("./app/assets/fonts/bein-normal.ttf"),
    }).then(() => this.setState({ fontLoaded: true }));
  };

  render() {
    return (
      <NavigationContainer>
        <Text>أثممخ</Text>
      </NavigationContainer>
    );
  }
}
