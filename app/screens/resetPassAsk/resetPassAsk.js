import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Linking
} from "react-native";

import styles from "./styles";

//Custom Components
import InputField from "../../components/inputField";
import MainButton from "../../components/mainButton";

export default class ResetPassAsk extends Component {
    state = {};

  
    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.headerText}>استعادة كلمة المرور</Text>
            <View style={styles.resetBox}>
              <View style={styles.resetArea}>
                <InputField placeholder="البريد الالكتروني أو رقم الهاتف" />
                <MainButton text="طلب رمز استعادة كلمة المرور" />

              </View>
              <View style={styles.loginArea}>
                  <Text style={styles.normalText}>العودة إلي</Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.normalLink}>تسجيل الدخول</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }