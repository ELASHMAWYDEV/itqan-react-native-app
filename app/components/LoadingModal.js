import React, { Component } from "react";
import { Modal, ActivityIndicator, View } from "react-native";
import Colors from "../assets/colors";

class LoadingModal extends Component {
  render() {
    return (
      <Modal visible={true} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={Colors.primary} style />
        </View>
      </Modal>
    );
  }
}

export default LoadingModal;
