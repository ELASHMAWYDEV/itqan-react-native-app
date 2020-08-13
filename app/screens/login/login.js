import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";

export default class Login extends Component {
  state = {};
  componentDidMount = () => {};

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>تسجيل الدخول</Text>
          <View style={styles.loginBox}>
            <View style={styles.loginArea}>
              <InputField placeholder="البريد الالكتروني أو رقم الهاتف" />
              <InputField placeholder="كلمة المرور" secured={true} />
              <MainButton text="تسجيل الدخول" login onPress={() => this.props.navigation.navigate("Home")}/>
              <TouchableOpacity>
                <Text style={styles.forgotPassText} onPress={() => this.props.navigation.navigate("ResetPassAsk")}>نسيت كلمة المرور ؟</Text>
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
