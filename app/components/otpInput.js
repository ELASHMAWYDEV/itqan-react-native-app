import React, { Component } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";

import Colors from "../assets/colors";
import Globals from "../assets/globals";
import Fonts from "../assets/fonts";

class OtpInput extends Component {
  state = {
    inputArray: [],
    values: [],
  };

  submitForm = () => {
    let allDone = true;
    this.state.values.map((value) => {
      if (value == "" || value === null) {
        allDone = false;
      }
    });

    if (allDone && this.state.values.length === 4) {
      alert("Your code is: " + this.state.values.join(""));
    }
  };

  handleInput = (input, index) => {
    if (this.state.inputArray.length !== index + 1) {
      this.state.inputArray[index + 1].focus();
    } else if(this.state.inputArray.length === index + 1) {
      this.state.inputArray[index].blur();
    }

    this.submitForm();


    
  };
  render() {
    return (
      <View style={style.container}>
        {[...Array(this.props.inputsNum)].map((e, index) => (
          <View key={index}>
            <TextInput
              key={index}
              style={[
                style.input,
                { marginHorizontal: this.props.inputsNum === 4 ? 12 : 5 },
              ]}
              placeholderTextColor={this.props.placeholderColor}
              maxLength={1}
              keyboardType="numeric"
              blurOnSubmit={false}
              ref={(input) => (this.state.inputArray[index] = input)}
              onTextInput={(input) => this.handleInput(input, index)}
              onChange={(input) => {
                var newValues = this.state.values;
                newValues[index] = input.nativeEvent.text;
                this.setState({ values: newValues });
              }}
            />
          </View>
        ))}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 10,
    paddingHorizontal: 14,
    fontFamily: Fonts.beinNormal,
    textAlign: "center",
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
});

OtpInput.defaultProps = {
  placeholderColor: Colors.darkGray,
  inputsNum: 4,
};
export default OtpInput;
