import React, { Component } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../assets/colors";
import Globals from "../assets/globals";
import Fonts from "../assets/fonts";

class MainButton extends Component {
  state = {};
  render() {
    return (
      <TouchableNativeFeedback useForeground>
        <View style={style.btn}>
          {this.props.login && (
            <AntDesign
              name="login"
              size={24}
              color={Colors.white}
              style={style.loginIcon}
            />
          )}
          <Text style={style.btnText}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

MainButton.defaultProps = {
  text: "العنوان",
  login: false,
};

const style = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 15,
  },
  btnText: {
    fontSize: 18,
    fontFamily: Fonts.beinNormal,
    color: Colors.white,
  },
  loginIcon: {
    position: "absolute",
    top: 13,
    left: 18,
    zIndex: 2,
    transform: [{ rotateY: "180deg" }],
  },
});

export default MainButton;
