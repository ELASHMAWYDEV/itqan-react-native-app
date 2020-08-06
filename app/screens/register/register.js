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
import InputField from "../../components/inputField";
import MainButton from "../../components/mainButton";
import PhoneInput from "../../components/phoneInput";

export default class Register extends Component {
  state = {
    termsChecked: false,
  };

  

  toggleCheckBox = (value) => {
    this.setState({ termsChecked: value });
  };


  alertInputs = () => {
    alert(`phone: ${this.state.phoneNumber}\ncode: ${this.state.countryCode}`);
  } 

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
                <Text style={styles.normalLink}>الشروط والأحكام</Text>
              </View>
              <MainButton text="تسجيل" onPress={this.alertInputs}/>

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
                  <Text style={styles.normalLink}>تسجيل الدخول</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
