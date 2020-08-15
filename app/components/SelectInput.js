import React, { Component } from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Modal,
  ScrollView,
} from "react-native";
import Icon from "react-native-ionicons";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";
import Globals from "../assets/globals";

class InputField extends Component {
  state = {
    value: this.props.selection[0],
    modalVisible: false,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  changeValue = (value) => {
    this.setState({ value });
    this.toggleModal();
  }
  render() {
    return (
      <View>
        {this.props.titleText && (
          <Text style={styles.titleText}>{this.props.placeholder}</Text>
        )}
        <TouchableNativeFeedback useForeground onPress={this.toggleModal}>
          <View style={styles.selectContainer}>
            <Text style={styles.selectedItem}>{this.state.value.label}</Text>
            <View style={styles.arrowIcon}>
              <Icon
                name="ios-arrow-down"
                size={28}
                style={styles.icon}
                color={Colors.darkGray}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
        <Modal
          visible={this.state.modalVisible}
          transparent
          animationType="slide"
          onRequestClose={this.toggleModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView style={styles.itemsContainer}>
              {this.props.selection.map((item, index) => (
                <TouchableNativeFeedback useForeground key={index} onPress={() => this.changeValue(item)}>
                  <View>
                    <View style={[styles.itemContainer, this.state.value == item && styles.selectedValue]} >
                      <Text style={styles.itemLabel}>{item.label}</Text>
                    </View>
                    {index != this.props.selection.length - 1 && (
                      <View style={styles.separator}></View>
                    )}
                  </View>
                </TouchableNativeFeedback>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

InputField.defaultProps = {
  titleText: false,
  placeholder: "اختر",
  placeholderColor: Colors.darkGray,
  selection: [],
};

const styles = StyleSheet.create({
  selectContainer: {
    ...Globals.inputField,
    ...Globals.raduisBox,
    overflow: "hidden",
    paddingHorizontal: 25,
  },
  selectedItem: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.lightGray,
    textAlign: "right",
    fontFamily: Fonts.beinNormal,
    fontSize: 18,
  },
  icon: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  arrowIcon: {
    position: "absolute",
    zIndex: 2,
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "100%",
  },
  titleText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.gray,
    fontSize: 18,
    marginTop: 10,
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
  },
  itemsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // maxHeight: 250,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
    paddingTop: 40,
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 10,
  },
  itemLabel: {
    fontFamily: Fonts.beinNormal,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    
  },
  separator: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: "center",
  },
  selectedValue: {
    backgroundColor: Colors.green
  }
});

export default InputField;
