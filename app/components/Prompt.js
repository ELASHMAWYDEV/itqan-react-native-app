import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Modal,
  StyleSheet,
} from "react-native";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

export default class Prompt extends Component {
  state = {
    visible: this.props.visible,
  };

  toggleModal = () => {
    this.setState({ visible: !this.state.visible });
  };

  onSubmitValue = (value) => {
    this.props.onSubmitValue(value);
    this.toggleModal();
  };

  render() {
    return (
      <Modal
        visible={this.state.visible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.container}>
          <View style={styles.promptBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{this.props.message}</Text>
            </View>

            {this.props.prompt && (
              <View style={styles.btnsContainer}>
                <TouchableNativeFeedback onPress={() => this.onSubmitValue(true)}>
                  <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>نعم</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  onPress={() => this.onSubmitValue(false)}
                >
                  <View style={[styles.btnContainer, styles.btnContainerLeft]}>
                    <Text style={[styles.btnText, styles.btnNo]}>لا</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
            {!this.props.prompt && (
              <View style={styles.btnsContainer}>
                <TouchableNativeFeedback onPress={() => this.onSubmitValue(true)}>
                  <View style={styles.okBtnContainer}>
                    <Text style={styles.btnText}>موافق</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}

Prompt.defaultProps = {
  onSubmitValue: () => null,
  message: "هنا توضع الرسالة التي تظهر للمستخدم",
  title: "تأكيد",
  prompt: false,
  visible: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  promptBox: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 10,
    width: "90%",
    height: 200,
    overflow: "hidden",
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: Fonts.beinNormal,
    fontSize: 26,
    textAlign: "center",
  },
  messageContainer: {
    paddingHorizontal: 18,
    marginVertical: 20,
  },
  message: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    color: Colors.gray,
  },
  btnsContainer: {
    flexDirection: "row-reverse",
    flex: 1,
    maxHeight: 60,
    marginTop: "auto",
    borderTopColor: Colors.darkGray,
    borderTopWidth: 0.5,
  },
  btnContainer: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainerLeft: {
    borderRightColor: Colors.darkGray,
    borderRightWidth: 0.5,
  },
  okBtnContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },  
  btnText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 20,
  },
  btnNo: {
    color: Colors.red,
  },
});
