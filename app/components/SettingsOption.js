import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Switch,
} from "react-native";
import Icon from "react-native-ionicons";

/*
 This component uses ionicons 
 Pass the icon name as a prop
 icon name can be found here => https://ionicons.com/v4/cheatsheet.html
*/

import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

class SettingsOptions extends Component {
  state = {
    enabled: this.props.enabled,
  };

  toggleSwitch = () => {
    this.setState({ enabled: !this.state.enabled });
    this.props.onValueChange(!this.state.enabled);
  };

  render() {
    let props = this.props;
    return (
      <TouchableNativeFeedback
        background={
          !props.noClick
            ? TouchableNativeFeedback.Ripple(Colors.darkGray)
            : null
        }
        onPress={props.onPress}
      >
        <View>
          <View style={styles.optionContainer}>
            <View style={styles.rightItems}>
              {props.icon && (
                <Icon
                  name={props.icon}
                  color={Colors.darkGray}
                  style={styles.optionIcon}
                />
              )}
              <Text style={styles.text}>{props.title}</Text>
            </View>
            <View style={styles.leftItems}>
              {props.subTitle && (
                <Text style={styles.grayText}>{props.subTitle}</Text>
              )}
              {props.leftArrow && (
                <Icon
                  name="ios-arrow-back"
                  color={Colors.darkGray}
                  style={styles.leftArrow}
                  size={28}
                />
              )}
              {props.checked && (
                <Icon
                  name="checkbox-outline"
                  color={Colors.green}
                  style={styles.leftArrow}
                  size={28}
                />
              )}
              {props.switch && (
                <Switch
                  trackColor={{
                    false: Colors.darkGray,
                    true: Colors.green,
                  }}
                  thumbColor={this.state.enabled ? Colors.green : Colors.blue}
                  onValueChange={this.toggleSwitch}
                  value={this.state.enabled}
                />
              )}
            </View>
          </View>
          {!props.lastItem && <View style={styles.separator}></View>}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

SettingsOptions.defaultProps = {
  icon: "add",
  title: "العنوان",
  leftArrow: true,
  lastItem: false,
  switch: false,
  enabled: false,
  noClick: false,
  checked: false,
  // onValueChange: () => null,

};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: Colors.lightGray,
    alignSelf: "center",
  },
  rightItems: {
    marginRight: "auto",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  leftItems: {
    marginLeft: "auto",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  optionIcon: {
    marginStart: 12,
    width: 25,
    textAlign: "center",
  },
  text: {
    fontFamily: Fonts.beinNormal,
    color: Colors.black,
    fontSize: 16,
  },
  grayText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.darkGray,
    fontSize: 16,
  },
  leftArrow: {
    marginEnd: 15,
  },
});

export default SettingsOptions;
