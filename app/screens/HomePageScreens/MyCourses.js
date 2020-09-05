import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";

export default class MyCourses extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>دوراتي</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15
  },
  title: {
    fontFamily: Fonts.beinNormal,
    fontSize: 22,
    textAlign: "right"
  }
})
