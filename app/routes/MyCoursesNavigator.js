import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import { MyCourses, FinishedCourses } from "../screens/MyCourses/index";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

const Tab = createMaterialTopTabNavigator();
const StatusBarHeight = StatusBar.currentHeight;
export default class MyCoursesNavigator extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="MyCourses" style={styles.navigator} tabBarOptions={{
        indicatorStyle: styles.indicator,
        style: {backgroundColor: Colors.white}
      }} sceneContainerStyle={{backgroundColor: Colors.white}}>
        <Tab.Screen
          name="FinishedCourses"
          component={FinishedCourses}
          options={{
            title: "الدورات المنتهية",
            tabBarLabel: ({ focused }) => (
              <TabLabel title="الدورات المنتهية" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="MyCourses"
          component={MyCourses}
          options={{
            title: "دوراتي",
            tabBarLabel: ({ focused }) => (
              <TabLabel title="دوراتي" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const TabLabel = ({ title, focused }) => {
  return (
    <Text
      style={[
        styles.title,
        {
          color: focused ? Colors.black : Colors.darkGray,
        },
      ]}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.beinNormal,
    fontSize: 20,
  },
  navigator: {
    paddingTop: StatusBarHeight,
    backgroundColor: Colors.white,
  },
  indicator: {
    backgroundColor: Colors.primary,
    height: 4
  }
});
