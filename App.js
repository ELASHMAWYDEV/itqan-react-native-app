import React, { Component } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";

import AuthNavigator from "./app/routes/AuthNavigator";
import BottomNavigator from "./app/routes/BottomNavigator";
import LoadingModal from "./app/components/LoadingModal";

export default class App extends Component {
  state = {
    fontLoaded: false,
    isSignedIn: false,
  };

  componentDidMount = async () => {
    
    try {
      const accessToken = await AsyncStorage.getItem("@access_token");
      const userData = await AsyncStorage.getItem("@user_data");

      if (accessToken && userData) {
        this.setState({ isSignedIn: true });
      } else {
        this.setState({ isSignedIn: false });
      }

      Font.loadAsync({
        "bein-normal": require("./app/assets/fonts/bein-normal.ttf"),
        "Ionicons": require('react-native-ionicons/fonts/Ionicons.ttf'),
      }).then(() => this.setState({ fontLoaded: true }));
    } catch (e) {
      
    }

    
  };


  login = () => {
      this.setState({ isSignedIn: !this.state.isSignedIn });
  }

  logout = async () => {
    try {
      await AsyncStorage.removeItem("@access_token");
      await AsyncStorage.removeItem("@user_data");
      this.setState({ isSignedIn: !this.state.isSignedIn });
    } catch (e) {
      console.log(e.message);
    }

  }

  render() {
    return !this.state.fontLoaded ? (
      <LoadingModal />
    ) : this.state.isSignedIn ? (
        <BottomNavigator logout={() => this.logout()}/>
    ) : (
        <AuthNavigator login={() => this.login()}/>
    );
  }
}
