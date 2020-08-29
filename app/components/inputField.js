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
    value: this.props.value.toString(),
    secured: this.props.secured,
    eyeIcon: "eye-off",
    showDatePicker: false,
    dateOfBirth: new Date(),
    dateValue: this.props.dateValue || new Date().getTime(),
  };

  componentDidMount = () => {

    //convert the date to string
    this.dateToString(this.state.dateValue);

  };

  toggleEye = () => {
    this.setState({
      secured: !this.state.secured,
      eyeIcon: this.state.secured === true ? "eye" : "eye-off",
    });
  };


  handleDateOfBirth = (event) => {
    const timestamp = event.nativeEvent.timestamp;

    //on closing the date picker
    if (event.type != "set") {
      return;
    }

    //Display the date in dd/mm/yyyy format on the input field
    this.dateToString(timestamp);
    this.props.onChangeDate(event);
  };


  dateToString = (timestamp) => {
    //Display the date in dd/mm/yyyy format on the input field
    const day = new Date(timestamp).getDate();
    const month = new Date(timestamp).getMonth() + 1;
    const year = new Date(timestamp).getFullYear();
    const dateValue = `${day}/${month}/${year}`;
    this.setState({ dateValue });
  }

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
              this.props.onChangeText(value) !== undefined;
              this.setState({ value });
            }}
            value={this.state.value}
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
                    value={this.state.dateOfBirth}
                    is24Hour={false}
                  />
                )}
              </View>
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
  DatePicker: false,
  dateOfBirth: new Date("today"),
  value: "",
  onChangeText: () => null,
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
