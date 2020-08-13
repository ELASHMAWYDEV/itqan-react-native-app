import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

const { width, height } = Dimensions.get("window");

class ThreeDots extends Component {
  state = {
    boxShown: false,
  };

  toggleBox = () => this.setState({ boxShown: !this.state.boxShown });

  render() {
    return (
      <View>
        <View style={styles.dotsContainer}>
          <TouchableOpacity activeOpacity={0.3} onPress={this.toggleBox}>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={Colors.darkGray}
            />
          </TouchableOpacity>
        </View>
        {this.state.boxShown && (
          <View style={styles.boxContainer}>
            <TouchableOpacity onPress={() => alert("Pressed")}>
              <View style={styles.boxBackground}></View>
            </TouchableOpacity>
            <View style={styles.box}>
              <TouchableNativeFeedback
                useForeground
                background={TouchableNativeFeedback.Ripple(Colors.darkGray)}
                onPress={() => alert("Pressed")}
              >
                <View style={styles.boxItem}>
                  <Text style={styles.boxText}>من نحن</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                useForeground
                background={TouchableNativeFeedback.Ripple(Colors.darkGray)}
              >
                <View style={styles.boxItem}>
                  <Text style={styles.boxText}>الأسئلة الشائعة</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                useForeground
                background={TouchableNativeFeedback.Ripple(Colors.darkGray)}
              >
                <View style={styles.boxItem}>
                  <Text style={styles.boxText}>المساعدة والدعم</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dotsContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    top: -40,
  },
  boxContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  boxBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  box: {
    position: "absolute",
    zIndex: 2,
    width: 180,
    backgroundColor: Colors.white,
    borderRadius: 20,
    top: 0,
    left: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 3,
    overflow: "hidden",
  },
  boxItem: {
    padding: 18,
    paddingEnd: 25,
    zIndex: 5,
  },
  boxText: {
    fontSize: 14,
    fontFamily: Fonts.beinNormal,
    color: Colors.black,
  },
});
export default ThreeDots;
