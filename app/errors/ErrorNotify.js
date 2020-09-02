import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

export default class ErrorNotify extends Component {
  state = {
    errorsVisible: true,
    clearBtnAnim: new Animated.Value(50),
    hideErrors: false,
    errorsContainerAnim: new Animated.Value(0),
    errorCount: this.props.errors.length,
  };

  static defaultProps = {
    errors: [],
    success: false,
    onClose: () => null,
  };

  componentDidMount = () => {
    //Animation for the Clear All Button
    Animated.spring(this.state.clearBtnAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    //remove the errors after seconds
    // setTimeout(() => this.removeErrors(), this.props.errors.length * 1800);
  };

  componentDidUpdate = () => {
    if (this.state.errorCount == 0) this.removeErrors();
  };

  removeErrors = () => {
    //Animate errors and clear btn in parallel
    Animated.parallel([
      Animated.spring(this.state.clearBtnAnim, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }),

      Animated.spring(this.state.errorsContainerAnim, {
        toValue: -350,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      //remove the ErrorNotify from the component tree & Call the onClose prop

      this.setState((prevState) => ({
        ...prevState,
        errorsVisible: !this.state.errorsVisible,
      }));
      //send onClose to the parent component

      this.props.onClose();
    });
  };

  render() {
    return (
      this.state.errorsVisible && (
        <View style={styles.mainContainer}>
          <Animated.View
            style={[
              styles.clearAllBtnContainer,
              { bottom: this.state.clearBtnAnim },
            ]}
          >
            <TouchableHighlight
              style={styles.clearAllBtn}
              underlayColor={Colors.red}
              onPress={this.removeErrors}
            >
              <Text style={styles.text}>مسح الكل</Text>
            </TouchableHighlight>
          </Animated.View>
          <Animated.View
            style={[
              styles.errorsContainer,
              { right: this.state.errorsContainerAnim },
            ]}
          >
            {this.props.errors.length != 0 &&
              Array.isArray(this.props.errors) &&
              this.props.errors.map((error, index) => {
                return (
                  <ErrorContainer
                    key={index}
                    success={this.props.success}
                    text={error}
                    removeOneError={() =>
                      this.setState({ errorCount: this.state.errorCount - 1 })
                    }
                  />
                );
              })}
          </Animated.View>
        </View>
      )
    );
  }
}

/*

Error container ===> every container has his own state

*/
class ErrorContainer extends Component {
  state = {
    slideAnim: new Animated.Value(-350),
    exist: true,
    hide: this.props.hide,
  };

  static defaultProps = {
    hide: false,
  };

  componentDidMount = () => {
    this.showError();
  };

  componentDidUpdate = () => {
    this.state.hide && this.hideError();
  };

  showError = () => {
    Animated.spring(this.state.slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  hideError = () => {
    Animated.spring(this.state.slideAnim, {
      toValue: -500,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setTimeout(() =>
      this.setState((prevState) => ({ ...prevState, exist: false }))
      , 250);
  };

  render() {
    return (
      this.state.exist && (
        <Animated.View
          style={[
            styles.container,
            {
              right: this.state.slideAnim,
            },
          ]}
        >
          <TouchableHighlight
            style={[
              styles.errorContainer,
              {
                backgroundColor: this.props.success ? Colors.green : Colors.red,
              },
            ]}
            onPress={() => {
              this.hideError();
              this.props.removeOneError();
            }}
            underlayColor={Colors.black}
          >
            <Text style={styles.text} numberOfLines={2}>
              {this.props.text}
            </Text>
          </TouchableHighlight>
        </Animated.View>
      )
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: 60,
    right: 0,
    zIndex: 50,
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 50,
  },
  container: {
    marginBottom: 20,
    width: "85%",
    alignSelf: "flex-end",
    height: 70,
    opacity: 0.95,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: "hidden",
  },
  clearAllBtnContainer: {
    width: "100%",
  },
  clearAllBtn: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: Colors.black,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  errorsContainer: {
    width: "100%",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 15,
  },
  text: {
    fontFamily: Fonts.beinNormal,
    color: Colors.white,
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
