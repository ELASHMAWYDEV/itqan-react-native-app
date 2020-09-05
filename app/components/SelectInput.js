import React, { Component } from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Text,
  Modal,
  ScrollView,
} from "react-native";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

class SelectInput extends Component {
  state = {
    value: this.props.value || this.props.selection[0].value,
    modalVisible: this.props.visible,
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
    this.props.toggleSelection();
  };

  changeValue = (value) => {
    this.setState({ value });
    this.props.onSelectValue(value);
    this.toggleModal();
  };
  render() {
    return (
        <Modal
          visible={this.state.modalVisible}
          transparent
          animationType="slide"
          onRequestClose={this.toggleModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView style={styles.itemsContainer}>
              {this.props.selection.map((item, index) => (
                <TouchableNativeFeedback
                  useForeground
                  key={index}
                  onPress={() => this.changeValue(item.value)}
                >
                  <View>
                    <View
                      style={[
                        styles.itemContainer,
                        this.state.value == item.value && styles.selectedValue,
                      ]}
                    >
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
    );
  }
}

SelectInput.defaultProps = {
  visible: false,
  iconSize: 28,
  onSelectValue: (value) => null,
  toggleSelection: () => null,
  selection: [{
    value: "",
    label: ""
  }],
};

const styles = StyleSheet.create({
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
    backgroundColor: Colors.green,
  },
});

export default SelectInput;
