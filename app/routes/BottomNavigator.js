/*
  Believe me "You Don't Want To Read This File :D"
*/
import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  BackHandler,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import MyCourses from "../screens/MyCourses/MyCourses";
import Notifications from "../screens/Notifications/Notifications";
import Favourites from "../screens/Favourites/Favourites";

const Tab = createBottomTabNavigator();

class BottomTabBar extends Component {

  componentDidMount = () => {
    BackHandler.addEventListener("hardwaretabpress", this.handleBackPress);
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwaretabpress", this.handleBackPress)
  }


  handleBackPress = async () => {
    this.handleTabPress("Home");
    return true;
  }


  //All used tabs within the navigator
  state = {
    tabs: [
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
        label: "الإشعارات",
        active: false,
      },
      {
        name: "Favourites",
        icon: (color) => <AntDesign name="hearto" size={24} color={color} />,
        label: "المفضلة",
        active: false,
      },
    ]
  }


  
  handleTabPress = async (tabName) => {
    this.props.navigation.navigate(tabName);
    let newTabs = [];

    this.state.tabs.map(t => {
      t.name == tabName ? (t.active = true) : (t.active = false);
      newTabs.push(t);
    });

    this.setState(prevState => ({...prevState, tabs: newTabs}));
  };

  render() {
    return (
      <View style={styles.bar}>
        {this.state.tabs.map((tab, index) => (
          <IconItem
            key={index}
            tab={tab}
            handleTabPress={() => this.handleTabPress(tab.name)}
          />
        ))}
      </View>
    );
  }
};

class IconItem extends Component {
  
  state = {
    //Animation
    iconPadding: new Animated.Value(0),
    iconTop: new Animated.Value(0),
    iconElevation: new Animated.Value(0),
    iconWidth: new Animated.Value(0),
    iconScale: new Animated.Value(0),
    textBottom: new Animated.Value(-20),
  };

  componentDidMount = () => {
    this.animateIcon();
  }

  animateIcon = () => {
    let {
      iconPadding,
      iconTop,
      iconElevation,
      iconWidth,
      iconScale,
      textBottom,
    } = this.state;
    
    const duration = 100; //All animations duration

    //reset the animation first
    iconPadding.setValue(0);
    iconTop.setValue(0);
    iconElevation.setValue(0);
    iconWidth.setValue(0);
    iconScale.setValue(0);
    textBottom.setValue(0);

    //Do the new Animation
    Animated.parallel([
      Animated.timing(iconPadding, {
        toValue: 10,
        duration,
        useNativeDriver: false,
      }),
      Animated.spring(iconTop, {
        toValue: -35,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(iconElevation, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(iconWidth, {
        toValue: 6,
        duration,
        useNativeDriver: false,
      }),
      Animated.spring(iconScale, {
        toValue: 1.1,
        duration,
        useNativeDriver: false,
      }),
      Animated.spring(textBottom, {
        toValue: 5,
        duration,
        useNativeDriver: false,
      }),
    ]).start();

    //Colors animation based on iconElevation animation
    let iconBgColor = iconElevation.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.white, Colors.primary]
    });

    this.setState({ iconBgColor });

  };


  render() {
    let tab = this.props.tab;
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            if (!tab.active) {
              this.props.handleTabPress();
              this.animateIcon();
            } else {
              this.props.handleTabPress();              
            }
          }}
        >
          <Animated.View style={[styles.barItem]}>
            <Animated.View
              style={[
                styles.barIcon,
                tab.active && {
                  padding: this.state.iconPadding,
                  top: this.state.iconTop,
                  elevation: this.state.iconElevation,
                  borderWidth: this.state.iconWidth,
                  transform: [{ scale: this.state.iconScale }],
                  backgroundColor: this.state.iconBgColor,
                },
              ]}
            >
              {tab.icon(tab.active ? Colors.white : Colors.darkGray)}
            </Animated.View>
            <Animated.Text
              style={[
                styles.barText,
                tab.active && {
                  bottom: this.state.textBottom,
                },
              ]}
            >
              {tab.label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default class BottomNavigator extends Component {
  
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <BottomTabBar {...props} />}
          initialRouteName="Home"
          backBehavior="none"
        >
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="MyCourses" component={MyCourses} />
          <Tab.Screen name="Home" component={HomeNavigation} />
          <Tab.Screen name="Favourites" component={Favourites} />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigation}
            initialParams={{ logout: () => this.props.logout() }}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    borderColor: Colors.white,
    borderRadius: 60 / 2,
  },
  barText: {
    position: "absolute",
    bottom: -20,
    fontSize: 15,
    fontFamily: Fonts.beinNormal,
    color: Colors.blue,
  },
});
