import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-ionicons";

//Globals
import Colors from "../assets/colors";
import Globals from "../assets/globals";
import Fonts from "../assets/fonts";

class InputField extends Component {
  state = {
    secured: this.props.secured,
    eyeIcon: "eye-off",
    showDatePicker: false,
    dateOfBirth: this.props.dateOfBirth,
    errorVisible: true,
    errorMessage: this.props.errorMessage,
    error: this.props.error,
  };

  componentDidMount = () => {
    if (this.state.errorVisible) {
      setTimeout(() => this.toggleError(), 2000);
    }
  };

  componentDidUpdate = () => {
    if (this.state.errorVisible) {
      setTimeout(() => this.toggleError(), 2000);
    }
  };

  toggleEye = () => {
    this.setState({
      secured: !this.state.secured,
      eyeIcon: this.state.secured === true ? "eye" : "eye-off",
    });
  };

  toggleError = () => {
    this.setState((prevState) => ({
      ...prevState,
      errorVisible: !this.state.errorVisible,
    }));
  };

  removeError = () => {
    this.setState((prevState) => ({ ...prevState, error: false }));
  };

  handleDateOfBirth = (event) => {
    const timestamp = event.nativeEvent.timestamp;

    //on closing the date picker
    if (event.type != "set") {
      return;
    }

    const day = new Date(timestamp).getDate();
    const month = new Date(timestamp).getMonth() + 1;
    const year = new Date(timestamp).getFullYear();
    const dateOfBirth = `${day}/${month}/${year}`;
    this.setState({ value: dateOfBirth });
    this.props.onChangeDate(event);
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
            placeholder={this.props.DatePicker ? null : this.props.placeholder}
            placeholderTextColor={this.props.placeholderColor}
            autoCorrect={this.props.autoCorrect}
            secureTextEntry={this.state.secured}
            selectTextOnFocus={this.state.secured === true ? true : false}
            onChangeText={(value) => {
              this.props.onChangeText(value);
              this.removeError();
            }}
            value={this.props.value}
            editable={this.props.DatePicker ? false : true}
          />

          {this.props.secured === true && (
            <TouchableNativeFeedback useForeground>
              <View style={style.eyeIcon}>
                <Icon
                  name={this.state.eyeIcon}
                  size={24}
                  color={
                    this.state.secured === true ? Colors.darkGray : Colors.black
                  }
                  style={style.icon}
                  onPress={this.toggleEye}
                />
              </View>
            </TouchableNativeFeedback>
          )}
          {this.props.DatePicker && (
            <TouchableNativeFeedback
              useForeground
              background={TouchableNativeFeedback.Ripple(Colors.black)}
              onPress={() =>
                this.setState({
                  showDatePicker: !this.state.showDatePicker,
                })
              }
            >
              <View style={style.calenderIcon}>
                <Icon name="calendar" size={34} color={Colors.white} />
                {this.state.showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="calendar"
                    onChange={(event) => this.handleDateOfBirth(event)}
                    value={this.props.dateOfBirth}
                    is24Hour={false}
                  />
                )}
              </View>
            </TouchableNativeFeedback>
          )}

          {this.state.error && (
            <TouchableOpacity
              style={style.errorIconContainer}
              activeOpacity={0.7}
              onPress={() => this.toggleError()}
            >
              <View>
                {this.props.errorMessage !== "" && this.state.errorVisible && (
                  <View style={style.errorMessageContainer}>
                    <View>
                      <Text style={style.errorMessageText}>
                        {this.props.errorMessage}
                      </Text>
                    </View>
                    <View style={style.errorTriangle}></View>
                  </View>
                )}
                <View style={style.errorIcon}>
                  <Icon
                    name="ios-information-circle"
                    size={34}
                    color={Colors.red}
                  />
                </View>
              </View>
            </TouchableOpacity>
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
  DatePicker: false,
  dateOfBirth: new Date("today"),
  value: "",
  error: false,
  errorMessage: "لا يمكنك ترك البريد الالكتروني فارغا",
};

const style = StyleSheet.create({
  inputField: {
    ...Globals.inputField,
  },
  icon: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  errorIconContainer: {
    position: "absolute",
    zIndex: 3,
    left: 45,
    top: 9,
  },
  errorIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessageContainer: {
    position: "absolute",
    bottom: 55,
    left: -22,
    zIndex: 1,
    backgroundColor: Colors.black,
    opacity: 0.8,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 150,
    elevation: 18,
  },
  errorMessageText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.white,
    fontSize: 12,
    textAlign: "center",
  },
  errorTriangle: {
    position: "absolute",
    bottom: -11,
    left: 40,
    borderBottomColor: Colors.black,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 12,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  calenderIcon: {
    position: "absolute",
    zIndex: 2,
    top: 10,
    left: 0,
    width: 70,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  arrowIcon: {
    position: "absolute",
    zIndex: 2,
    top: 9,
    left: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  titleText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.gray,
    fontSize: 18,
    marginTop: 10,
  },
});

export default InputField;
