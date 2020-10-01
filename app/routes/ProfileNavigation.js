import React, { Component } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import Icon from "react-native-ionicons";

//Customs
import Fonts from "../assets/fonts";
import Colors from "../assets/colors";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import {
  ProfileSettings,
  Language,
  ChangePass,
  Preferences,
  ProfileData,
  VideoRes,
} from "../screens/ProfileScreens/index";

//Components

const Stack = createStackNavigator();


class ProfileNavigation extends Component {
  state = {};

  render() {
    return (
      <Stack.Navigator
        initialRouteName="ProfileSettings"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: Fonts.beinNormal,
            textAlign: "center",
            fontSize: 22
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
          initialParams={{ logout: () => this.props.route.params.logout() }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{
            headerTitle: "اختر اللغة",
          }}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{
            headerTitle: "تغيير كلمة المرور",
          }}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{
            headerTitle: "التفضيلات",
          }}
        />
        <Stack.Screen
          name="ProfileData"
          component={ProfileData}
          options={{
            headerTitle: "معلومات الملف الشخصي",
          }}
        />
        <Stack.Screen
          name="VideoRes"
          component={VideoRes}
          options={{
            headerTitle: "اختر الجودة",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default ProfileNavigation;
