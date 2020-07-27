import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../assets/colors";
import Globals from '../assets/globals';

class InputField extends Component {
    state = {};
    render() {
        return (
            <TextInput
                style={style}
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderColor}
                autoCorrect={this.props.autoCorrect}
                secureTextEntry={this.props.secured}
            />
        );
    }
}

const style = {
    ...Globals.inputField, 
    
};

InputField.defaultProps = {
    placeholder: "",
    placeholderColor: Colors.darkGray,
    autoCorrect: false,
    secured: false,
};

export default InputField;
