import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import {
  Login,
  Register,
  Otp,
  ResetPassAsk,
  ResetPassSubmit,
} from "../screens/AuthScreens/index";


const Stack = createStackNavigator();

export default class AuthNavigator extends Component {

  

  render() {
    return (
      <>
      <NavigationContainer>
        
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ login: () => this.props.login() }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="ResetPassAsk" component={ResetPassAsk} />
          <Stack.Screen name="ResetPassSubmit" component={ResetPassSubmit} />
        </Stack.Navigator>
        </NavigationContainer>
        </>
    );
  }
}
