/*
  Believe me "You Don't Want To Read This File :D"
*/

import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  BackHandler,
  Alert,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import MyCourses from "../screens/MyCourses/MyCourses";
import Notifications from "../screens/Notifications/Notifications";
import Favourites from "../screens/Favourites/Favourites";

const Tab = createBottomTabNavigator();

const BottomTabBar = (props) => {
  //Animation
  // const iconMarginBottom = useState(new Animated.Value(0))[0];
  // const iconBackgroundColor = useState(new Animated.Value(0))[0];
  // const textDisplay = useState(new Animated.Value(0))[0];
  // const iconColor = useState(new Animated.Value(0))[0];

  //Animation Functions
  const handleTabPress = (index) => {
    props.navigation.navigate(tabs[index].name);
    setTabs((tabs) => {
      let newTabs = [];
      tabs.map((t, i) => {
        i == index ? (t.active = true) : (t.active = false);
        newTabs.push(t);
      });
      return newTabs;
    });


    // const goBack = (index) => {
    //   index != 2
    //   ? handleTabPress(2)
    //   : Alert.alert("اغلاق التطبيق", "هل تريد حقا الخروج من التطبيق ؟", [
    //       {
    //         text: "نعم",
    //         onPress: () => BackHandler.exitApp(),
    //       },
    //       {
    //         text: "لا",
    //       },
    //     ])
    // };

    // BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   () => goBack(2)
    // );
    
  };
  

  // useEffect(() => {
  //   BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     Alert.alert("اغلاق التطبيق", "هل تريد حقا الخروج من التطبيق ؟", [
  //       {
  //         text: "نعم",
  //         onPress: () => BackHandler.exitApp(),
  //       },
  //       {
  //         text: "لا",
  //       },
  //     ])
  //   );
  // });

  //All used tabs within the navigator
  const [tabs, setTabs] = useState([
    {
      name: "Profile",
      icon: (color) => <Feather name="user" size={24} color={color} />,
      label: "حسابي",
      active: false,
    },
    {
      name: "MyCourses",
      icon: (color) => <Feather name="play-circle" size={24} color={color} />,
      label: "دوراتي",
      active: false,
    },
    {
      name: "Home",
      icon: (color) => <Entypo name="home" size={24} color={color} />,
      label: "الرئيسية",
      active: true,
    },
    {
      name: "Notifications",
      icon: (color) => (
        <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
      ),
      label: "التنبيهات",
      active: false,
    },
    {
      name: "Favourites",
      icon: (color) => <AntDesign name="hearto" size={24} color={color} />,
      label: "المفضلة",
      active: false,
    },
  ]);

  return (
    <View style={styles.bar}>
      {tabs.map((tab, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => handleTabPress(index)}
        >
          <Animated.View style={[styles.barItem]}>
            <Animated.View
              style={[styles.barIcon, tab.active && styles.activeItem]}
            >
              {tab.icon(tab.active ? Colors.white : Colors.darkGray)}
            </Animated.View>
            <Text style={[styles.barText, tab.active && styles.barTextAcitve]}>
              {tab.label}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default class BottomNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="MyCourses" component={MyCourses} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    elevation: 20,
  },
  barItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  barIcon: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    overflow: "hidden",

  },
  activeItem: {
    borderRadius: 60 / 2,
    backgroundColor: Colors.primary,
    top: -5,
    transform: [{ scale: 1.1 }],
    borderWidth: 6,
    borderColor: Colors.white,
    padding: 10,
    elevation: 1,
  },
  barText: {
    fontSize: 15,
    fontFamily: Fonts.beinNormal,
    marginBottom: 10,
    color: Colors.blue,
    display: "none",
  },
  barTextAcitve: {
    display: "flex",
  },
});
