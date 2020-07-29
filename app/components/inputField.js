import React, { Component } from "react";
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../assets/colors";
import Globals from "../assets/globals";

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
                <TextInput
                    style={style.inputField}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderColor}
                    autoCorrect={this.props.autoCorrect}
                    secureTextEntry={this.state.secured}
                    selectTextOnFocus={this.state.secured === true ? true : false}
                />

                {this.props.secured === true && (
                    <TouchableWithoutFeedback>
                        <Entypo
                            name={this.state.eyeIcon}
                            size={24}
                            color={
                                this.state.secured === true
                                    ? Colors.darkGray
                                    : Colors.black
                            }
                            style={style.eyeIcon}
                            onPress={this.toggleEye}
                        />
                        
                    </TouchableWithoutFeedback>
                )}
            </View>
        );
    }
}

const style = StyleSheet.create({
    inputField: {
        ...Globals.inputField,
    },
    eyeIcon: {
        position: 'absolute',
        zIndex: 2,
        top: 15,
        left: 8,
        width: 50,
        height: 40,
        backgroundColor: 'transparent',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

InputField.defaultProps = {
    placeholder: "",
    placeholderColor: Colors.darkGray,
    autoCorrect: false,
    secured: false,
};

export default InputField;
