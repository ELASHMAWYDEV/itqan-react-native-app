import React, { Component } from "react";
import { Modal, ActivityIndicator, View } from "react-native";
import Colors from "../assets/colors";

class LoadingModal extends Component {
  state = {
    visible: this.props.visible,
  };

  render() {
    return (
      <Modal
        visible={true}
        transparent={true}
        animationType="fade"
        onRequestClose={() => this.setState({ visible: !this.state.visible })}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <ActivityIndicator size={60} color={Colors.primary} style />
        </View>
      </Modal>
    );
  }
}

LoadingModal.defaultProps = {
  visible: true,
};
export default LoadingModal;
