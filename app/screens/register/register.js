import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  LayoutAnimation,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

import styles from "./styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import PhoneInput from "../../components/PhoneInput";

export default class Register extends Component {
  state = {
    termsChecked: false,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  toggleCheckBox = (value) => {
    this.setState({ termsChecked: value });
  };

  alertInputs = () => {
    alert(`phone: ${this.state.phoneNumber}\ncode: ${this.state.countryCode}`);
  };


  register = () => {
    this.setState({ loading: true }); //Loading modal will appear until the fetch is done

    const email = this.state.email;
    const password = this.state.password;


    try {
      const accessToken = await AsyncStorage.getItem("@access_token");

      const response = await fetch(`${Config.api}/users/login`, {
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
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>التسجيل</Text>
          <View style={styles.registerBox}>
            <View style={styles.registerArea}>
              <InputField
                placeholder="الاسم الأول"
                onChangeText={(firstName) => this.setState({ firstName })}
              />
              <InputField
                placeholder="الاسم الأخير"
                onChangeText={(lastName) => this.setState({ lastName })}
              />
              <PhoneInput
                onChangeCode={(countryCode) => this.setState({ countryCode })}
                onChangePhone={(phoneNumber) => this.setState({ phoneNumber })}
              />
              <InputField
                placeholder="البريد الالكتروني"
                onChangeText={(email) => this.setState({ email })}
              />
              <InputField
                placeholder="كلمة المرور"
                secured={true}
                onChangeText={(password) => this.setState({ password })}
              />
              <InputField
                placeholder="تأكيد كلمة المرور"
                secured={true}
                onChangeText={(passwordConfirm) =>
                  this.setState({ passwordConfirm })
                }
              />
              <View style={styles.termsContainer}>
                <CheckBox
                  onValueChange={(value) => this.toggleCheckBox(value)}
                  value={this.state.termsChecked}
                />
                <Text style={styles.normalText}>
                  بإنشائك للحساب يعني موافقتك على
                </Text>
                <TouchableOpacity>
                  <Text style={styles.normalLink}>الشروط والأحكام</Text>
                </TouchableOpacity>
              </View>
              <MainButton text="تسجيل" onPress={this.register} />

              <Text style={styles.grayText}>----------- أو -----------</Text>
              <View style={styles.registerIcons}>
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
            <View style={styles.loginArea}>
              <KeyboardAvoidingView behavior="height">
                <Text style={styles.normalText}>تمتلك حساب بالفعل</Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={styles.normalLink}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    تسجيل الدخول
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
