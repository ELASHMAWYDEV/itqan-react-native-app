import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";

//Navigator
import MyCoursesNavigator from "../../routes/MyCoursesNavigator";

export default class MyCoursesPage extends Component {
  state = {};
  render() {
    return (
      <>
        <MyCoursesNavigator />
      </>
    );
  }
}
