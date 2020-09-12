import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  SafeAreaView
} from "react-native";
import Icon from "react-native-ionicons";

//Globals
import Fonts from "../../assets/fonts";
import Colors from "../../assets/colors";

//Component
import SelectInput from "../../components/SelectInput";


//The Home Page Navigator
import HomePageNavigator from "../../routes/HomePageNavigator";

const StatusBarHeight = StatusBar.currentHeight;

export default class HomePage extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.imageSliderContainer}>
          <Image
            style={{
              resizeMode: "cover",
              width: "100%",
              height: 200,
            }}
            source={{
              uri:
                "https://images.pexels.com/photos/5195671/pexels-photo-5195671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }}
          />
          <View style={styles.dotsContainer}>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={[styles.dot, {backgroundColor: "white"}]}></View>
            <View style={styles.dot}></View>
          </View>
        </View>
        <View style={styles.searchBoxContainer}>
          <TouchableNativeFeedback>
            <View style={styles.searchSelect}>
              <Text style={styles.searchSelectText}>دروس</Text>
              <Icon
              name="ios-arrow-down"
              color={Colors.primary}
              style={styles.searchSelectIcon}
                size={20}
              />
              <SelectInput
              selection={[
                {
                  value: "courses",
                  label: "دروس",
                },
              ]}
            />
            </View>
          </TouchableNativeFeedback> 
            <View style={styles.searchSeparator}></View>
          <TextInput
            placeholder="ابحث الأن عن الدورات"
            placeholderTextColor={Colors.darkGray}
            style={styles.searchText}
          />
        </View>
        <HomePageNavigator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: StatusBarHeight,
    flex: 1,
    height: 1000
  },
  searchBoxContainer: {
    width: "85%",
    height: 50,
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 20,
    top: -25,
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  searchText: {
    fontFamily: Fonts.beinNormal,
    flex: 1,
    paddingHorizontal: 15,
    textAlign: "right",
    fontSize: 16,
  },
  searchSelect: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  searchSelectText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary
  },
  searchSelectIcon: {
    transform: [
      {translateX: -10}
    ]
  },
  searchSeparator: {
    width: 1,
    height: "70%",
    backgroundColor: Colors.darkGray,
    alignSelf: "center"
  },
  dotsContainer: {
    position: "absolute",
    bottom: 35,
    alignSelf: "center",
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginHorizontal: 10,
  },
  
});
