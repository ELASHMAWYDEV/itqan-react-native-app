import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "./styles";

//Custom Components
import OtpInput from "../../components/otpInput";
import MainButton from "../../components/mainButton";

export default class Otp extends Component {
  state = {};

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>أدخل رمز التحقق</Text>
          <View style={styles.resetBox}>
            <View style={styles.resetArea}>
              <OtpInput />
              <MainButton text="تحقق" />
            </View>
            <View style={styles.loginArea}>
              <Text style={styles.normalText}>لم يصلك رمز التحقق</Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.normalLink}>اطلب مجدداً</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
