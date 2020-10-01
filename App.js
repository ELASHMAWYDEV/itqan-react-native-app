import React, { Component } from "react";
import * as Font from "expo-font";
import { BackHandler, LogBox } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import AuthNavigator from "./app/routes/AuthNavigator";
import MainNavigation from "./app/routes/MainNavigation";
import LoadingModal from "./app/components/LoadingModal";


//Custom Components
import Prompt from "./app/components/Prompt"; //to handle closing the app


//Ignore Some Warnings
LogBox.ignoreLogs([
  "VirtualizedLists",
  "Non-serializable values",
  "componentWillReceiveProps",
  "componentWillMount"
]);

export default class App extends Component {
  state = {
    fontLoaded: false,
    isSignedIn: false,
    promptClose: false,
  };

  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.promptClose);

    try {
      const accessToken = await SecureStore.getItemAsync("access_token");
      const userData = await SecureStore.getItemAsync("user_data");

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
      console.log(e.message)
    }
  };



  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.promptClose);
  };

  promptClose = () => {
    this.setState({ promptClose: !this.state.promptClose });
    return true;
  };

  closeApp = (value) => {
    if (value) {
      BackHandler.exitApp();
    }
  };



  login = () => {
      this.setState({ isSignedIn: !this.state.isSignedIn });
  }

  logout = async () => {
    try {
      await SecureStore.deleteItemAsync("access_token");
      await SecureStore.deleteItemAsync("user_data");
      this.setState({ isSignedIn: !this.state.isSignedIn });
    } catch (e) {
      console.log(e.message);
    }

  }

  render() {
    return !this.state.fontLoaded ? (
      <LoadingModal />
    ) : this.state.isSignedIn ? (
        <MainNavigation logout={() => this.logout()}/>
      ) : (
          <>
          {this.state.promptClose && (
            <Prompt
              onSubmitValue={this.closeApp}
              prompt
              message="هل تريد الخروج من التطبيق ؟"
            />
          )}
            <AuthNavigator login={() => this.login()} />
          </>
    );
  }
}
