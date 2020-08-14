import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  View,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

//Globals
import Colors from "../assets/colors";
import Globals from "../assets/globals";
import Fonts from "../assets/fonts";

class InputField extends Component {
  state = {
    secured: this.props.secured,
    eyeIcon: "eye-with-line",
  };

  toggleEye = () => {
    this.setState({
      secured: !this.state.secured,
      eyeIcon: this.state.secured === true ? "eye" : "eye-with-line",
    });
  };

  render() {
    return (
      <View>
        {this.props.titleText && (
          <Text style={style.titleText}>{this.props.placeholder}</Text>
        )}
        <View>
          <TextInput
            style={style.inputField}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderColor}
            autoCorrect={this.props.autoCorrect}
            secureTextEntry={this.state.secured}
            selectTextOnFocus={this.state.secured === true ? true : false}
          />

          {this.props.secured === true && (
            <TouchableNativeFeedback
              useForeground
              background={TouchableNativeFeedback.Ripple(Colors.darkGray)}
            >
              <Entypo
                name={this.state.eyeIcon}
                size={24}
                color={
                  this.state.secured === true ? Colors.darkGray : Colors.black
                }
                style={style.eyeIcon}
                onPress={this.toggleEye}
              />
            </TouchableNativeFeedback>
          )}
        </View>
      </View>
    );
  }
}

InputField.defaultProps = {
  titleText: false,
  placeholder: "",
  placeholderColor: Colors.darkGray,
  autoCorrect: false,
  secured: false,
};

const style = StyleSheet.create({
  inputField: {
    ...Globals.inputField,
  },
  eyeIcon: {
    position: "absolute",
    zIndex: 2,
    top: 9,
    left: 8,
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 50 / 2,
    textAlign: "center",
    textAlignVertical: "center",
  },
  titleText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.gray,
    fontSize: 18,
    marginTop: 10,
  },
});

export default InputField;
