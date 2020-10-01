import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
  StyleSheet,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import * as Config from "../../config/config";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import Loading from "../../components/LoadingModal";

//Error Hanlders
import ErrorHandler from "../../errors/ErrorHandler";
import ErrorNotify from "../../errors/ErrorNotify";

//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";
import Globals from "../../assets/globals";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    promptClose: false,
    errors: [], //pass error codes here ON SUCCESS / ON ERROR
    success: false,
  };

  componentDidMount = async () => {
    try {
      const accessToken = await SecureStore.getItemAsync("access_token");
      if (accessToken !== null) {
        this.props.route.params.login();
      }
    } catch (e) {
      alert(e.message);
    }
  };

  login = async () => {
    this.setState({ loading: true }); //Loading modal will appear until the fetch is done

    const email = this.state.email.trim().toLowerCase();
    const password = this.state.password.trim();

    try {
      const accessToken = await SecureStore.getItemAsync("access_token");

      const response = await fetch(`${Config.api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email,
          password,
          loginType: "email",
        }),
      });
      const data = await response.json();

      if (data.success && data.accessToken) {
        await SecureStore.setItemAsync("access_token", data.accessToken);
        await SecureStore.setItemAsync("user_data", JSON.stringify(data.user));
        this.props.route.params.login();
      } else if (!data.success) {
        this.setState({ errors: data.codes, success: false });
      }

      this.setState({ loading: false });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <>
        {this.state.errors.length != 0 && (
          <ErrorNotify
            errors={ErrorHandler.msg(this.state.errors)}
            onClose={() => {
              this.setState((prevState) => ({ ...prevState, errors: [] }));
            }}
            success={this.state.success}
          />
        )}
        {this.state.loading && <Loading />}
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.headerText}>تسجيل الدخول</Text>
            <View style={styles.loginBox}>
              <View style={styles.loginArea}>
                <InputField
                  placeholder="البريد الالكتروني أو رقم الهاتف"
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                  error={this.state.emailError ? true : false}
                  errorMessage={this.state.emailError}
                />
                <InputField
                  placeholder="كلمة المرور"
                  secured={true}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  error={this.state.passwordError ? true : false}
                  errorMessage={this.state.passwordError}
                />
                <MainButton
                  text="تسجيل الدخول"
                  login
                  onPress={() => this.login()}
                />
                <TouchableOpacity>
                  <Text
                    style={styles.forgotPassText}
                    onPress={() =>
                      this.props.navigation.navigate("ResetPassAsk")
                    }
                  >
                    نسيت كلمة المرور ؟
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.forgotPassText]}>
                  ----------- أو -----------
                </Text>
                <View style={styles.signinIcons}>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Entypo
                      name="facebook-with-circle"
                      size={53}
                      color="#395898"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <FontAwesome
                      name="google"
                      size={30}
                      color="white"
                      style={styles.googleIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.registerArea}>
                <KeyboardAvoidingView behavior="height">
                  <Text style={styles.registerText}>لاتمتلك حسابا لدينا ؟</Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text
                      style={styles.registerLink}
                      onPress={() => this.props.navigation.navigate("Register")}
                    >
                      سجل الأن
                    </Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Globals.mainContainer(),
  },
  headerText: {
    ...Globals.headerText,
  },
  loginBox: {
    ...Globals.inputsBox,
  },
  loginArea: {
    flex: 6,
    marginVertical: 20,
  },
  signinButton: {
    marginVertical: 20,
  },
  signinButtonText: {
    ...Globals.raduisBtn,
  },
  forgotPassText: {
    color: Colors.darkGray,
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 15,
  },
  signinIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    backgroundColor: "#EB4132",
    marginLeft: 20,
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
  registerArea: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  registerText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
  },
  registerLink: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary,
    marginRight: 5,
  },
});
