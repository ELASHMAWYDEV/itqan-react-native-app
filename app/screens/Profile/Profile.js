import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-ionicons";

//Customs
import Fonts from "../../assets/fonts";
import Colors from "../../assets/colors";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Language from "../Language/Language";

//Components

const Stack = createStackNavigator();

class Home extends Component {
  state = {};
  render() {
    return (
      <Stack.Navigator
        initialRouteName="ProfileSettings"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: Fonts.beinNormal,
            textAlign: "center",
          },
          headerLeft: ({ onPress }) => {
            this.goBack = onPress;
            return <View></View>;
          },
          headerRight: () => (
            <TouchableNativeFeedback useForeground onPress={this.goBack}>
              <View
                style={{
                  marginEnd: 10,
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="ios-arrow-forward"
                  size={26}
                  color={Colors.darkGray}
                />
              </View>
            </TouchableNativeFeedback>
          ),
        }}
      >
        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            headerTitle: "حسابي",
            headerLeft: false,
            headerRight: false,
          }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{
            headerTitle: "اللغة",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Home;
