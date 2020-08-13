import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

import styles from "./styles";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";

export default class ResetPassSubmit extends Component {
  state = {};

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>استعادة كلمة المرور</Text>
          <View style={styles.resetBox}>
            <View style={styles.resetArea}>
              <InputField placeholder="كلمة المرور الجديدة" secured={true} />
              <InputField placeholder="تأكيد كلمة المرور" secured={true} />
              <MainButton text="تعيين" />
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
