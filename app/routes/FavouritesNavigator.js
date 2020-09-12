import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


//Screens
import FavouritesPage from "../screens/Favourites/FavouritesPage";


//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";


const Tab = createMaterialTopTabNavigator();
const StatusBarHeight = StatusBar.currentHeight;

export default class FavouritesNavigator extends Component {

  render() {
    return (
      <Tab.Navigator tabBar={(props) => <Header />} style={styles.navigator} sceneContainerStyle={{backgroundColor: Colors.white}}>
        <Tab.Screen name="FavouritePage" component={FavouritesPage} />
      </Tab.Navigator>
    );
  }
}


const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>المفضلة</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  navigator: {
    backgroundColor: Colors.white,
  },
  header: {
    width: "100%",
    height: 90,
    paddingTop: StatusBarHeight,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4
  },
  headerText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 22,

  }
})