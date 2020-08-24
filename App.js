import React, { Component } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from "./app/routes/AuthNavigator";
import BottomNavigator from "./app/routes/BottomNavigator";
import LoadingModal from "./app/components/LoadingModal";

export default class App extends Component {
  state = {
    fontLoaded: false,
    isSignedIn: false,
  };

  componentDidMount = () => {
    Font.loadAsync({
      "bein-normal": require("./app/assets/fonts/bein-normal.ttf"),
      "Ionicons": require('react-native-ionicons/fonts/Ionicons.ttf'),
    }).then(() => this.setState({ fontLoaded: true }));
  };


  goHome = () => {
    this.setState({ isSignedIn: !this.state.isSignedIn });
  }

  logout = () => {
    this.setState({ isSignedIn: !this.state.isSignedIn });
  }
  render() {
    return !this.state.fontLoaded ? (
      <LoadingModal />
    ) : this.state.isSignedIn ? (
        <BottomNavigator logout={() => this.logout()}/>
    ) : (
        <AuthNavigator goHome={() => this.goHome()}/>
    );
  }
}
