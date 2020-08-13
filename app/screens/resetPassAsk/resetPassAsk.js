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
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";

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
                <MainButton text="طلب رمز استعادة كلمة المرور" onPress={() => this.props.navigation.navigate("Otp")}/>

              </View>
              <View style={styles.loginArea}>
                  <Text style={styles.normalText}>العودة إلي</Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.normalLink} onPress={() => this.props.navigation.navigate("Login")}>تسجيل الدخول</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
  }