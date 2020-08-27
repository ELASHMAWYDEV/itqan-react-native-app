import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import * as Config from "../../config/config";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import Prompt from "../../components/Prompt";
import Loading from "../../components/LoadingModal";

//Error Hanlder
import ErrorHandler from "../../errors/ErrorHandler";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    promptClose: false,
  };

  componentDidMount = async () => {
    BackHandler.addEventListener("hardwareBackPress", this.promptClose);

    try {
      const accessToken = await AsyncStorage.getItem("@access_token");
      if (accessToken !== null) {
        this.props.route.params.login();
      }
    } catch (e) {
      alert(e.message);
    }
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.promptClose);
  };

  promptClose = () => {
    this.setState({ promptClose: !this.state.promptClose });
  };

  closeApp = (value) => {
    if (value) {
      BackHandler.exitApp();
    }
  };

  login = async () => {
    this.setState({ loading: true }); //Loading modal will appear until the fetch is done

    const email = this.state.email;
    const password = this.state.password;

    try {
      const accessToken = await AsyncStorage.getItem("@access_token");

      const response = await fetch(`${Config.api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.success && data.accessToken) {
        await AsyncStorage.setItem("@access_token", data.accessToken);
        await AsyncStorage.setItem("@user_data", JSON.stringify(data.user));
        this.props.route.params.login();
      } else {
        this.setState({ loading: false });

        return alert(JSON.stringify(data, null, 2));
      }
      this.setState({ loading: false });
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    return (
      <ScrollView>
        {this.state.promptClose && (
          <Prompt
            onSubmitValue={this.closeApp}
            prompt
            message="هل تريد الخروج من التطبيق ؟"
          />
        )}
        {this.state.loading && <Loading />}
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
                  onPress={() => this.props.navigation.navigate("ResetPassAsk")}
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
    );
  }
}
