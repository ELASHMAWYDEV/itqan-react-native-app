import React, { Component } from "react";
import { View, Text } from "react-native";

//Customs
import Fonts from "../../assets/fonts";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import ProfileSettings from "../ProfileSettings/ProfileSettings";


//Components
import ThreeDots from "../../components/ThreeDots";

const Stack = createStackNavigator();


class Home extends Component {
  state = {};
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{
          headerTitle: "حسابي",
          headerTitleStyle: {
            fontFamily: Fonts.beinNormal,
            textAlign: "center"
          },
          headerLeft: false,
          headerRight: false,
        }}/>
      </Stack.Navigator>
    );
  }
}

export default Home;
