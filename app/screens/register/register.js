import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Linking,
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

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>التسجيل</Text>
          <View style={styles.registerBox}>
            <View style={styles.registerArea}>
              <InputField placeholder="الاسم الأول" />
              <InputField placeholder="الاسم الأخير" />
              <PhoneInput
                onChangeCode={(countryCode) => this.setState({ countryCode })}
                onChangePhone={(phoneNumber) => this.setState({ phoneNumber })}
              />
              <InputField placeholder="البريد الالكتروني" />
              <InputField placeholder="كلمة المرور" secured={true} />
              <InputField placeholder="تأكيد كلمة المرور" secured={true} />
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
              <MainButton text="تسجيل" onPress={this.alertInputs} />

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
                  <Text style={styles.normalLink} onPress={() => this.props.navigation.navigate("Login")}>تسجيل الدخول</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
