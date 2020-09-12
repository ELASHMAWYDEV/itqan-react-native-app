import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//Screens
import {
  Categories,
  LiveSessions,
  Materials,
  Courses,
} from "../screens/HomePageScreens/index";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

const Tab = createMaterialTopTabNavigator();

export default class HomePageNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBar={(props) => <NavigationTabs {...props} />}
        style={styles.navigationContainer}
        backBehavior="none"
        removeClippedSubviews={true}
        initialRouteName="Courses"
      >
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="LiveSessions" component={LiveSessions} />
      <Tab.Screen name="Materials" component={Materials} />
      <Tab.Screen name="Courses" component={Courses} />
      </Tab.Navigator>
    );
  }
}

class NavigationTabs extends Component {
  state = {
    tabs: [
      {
        name: "Courses",
        label: "دورات",
        icon: () => <MaterialIcons name="computer" size={34} color="white" />,
        active: true,
      },
      {
        name: "Materials",
        label: "مواد ومصادر",
        icon: () => (
          <MaterialCommunityIcons
            name="projector-screen"
            size={32}
            color="white"
          />
        ),
        active: false,
      },
      {
        name: "LiveSessions",
        label: "جلسات مباشرة",
        icon: () => <Octicons name="broadcast" size={30} color="white" />,
        active: false,
      },
      {
        name: "Categories",
        label: "الأقسام",
        icon: () => <AntDesign name="API" size={30} color="white" />,
        active: false,
      },
    ],
  };

  componentDidMount = () => {
    //To go to Courses screen on clicking back button
    BackHandler.addEventListener("hardwareBackPress", this.goToInitialRoute);
    
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.goToInitialRoute);
  };

  goToInitialRoute = async () => {
    await this.goToTab("Courses");
    return true;
  };

  goToTab = (tabName) => {
    this.props.navigation.navigate(tabName);

    let newTabs = [];
    this.state.tabs.map((tab) => {
      tab.name == tabName ? (tab.active = true) : (tab.active = false);
      newTabs.push(tab);
    });

    this.setState({ tabs: newTabs });
  };

  render() {
    return (
      <View style={styles.tabsContainer}>
        {this.state.tabs.map((tab, i) => (
          <View key={i} style={styles.tabContainer}>
            <TouchableHighlight
              style={styles.iconContainer}
              underlayColor={Colors.black}
              onPress={() => this.goToTab(tab.name)}
            >
              <View>{tab.icon()}</View>
            </TouchableHighlight>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => this.goToTab(tab.name)}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: tab.active ? Colors.primary : Colors.darkGray,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    top: -10,
  },
  tabsContainer: {
    width: "95%",
    backgroundColor: Colors.white,
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    padding: 15,
  },
  tabContainer: {
    marginHorizontal: "2%",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 15,
  },
  tabText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    color: Colors.darkGray,
  },
});
