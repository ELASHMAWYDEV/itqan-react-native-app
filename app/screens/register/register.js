import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";
import Colors from "../../assets/colors";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";

//Custom Components
import InputField from "../../components/inputField";
import MainButton from "../../components/mainButton";

export default class Register extends Component {
  state = {};
  componentDidMount = () => {};

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SafeAreaView>
            <Text style={styles.headerText}>التسجيل</Text>
            <View style={styles.registerBox}>
              <View style={styles.registerArea}>
                <InputField placeholder="الاسم الأول" />
                <InputField placeholder="الاسم الأخير" />
                <InputField placeholder="رقم الهاتف" />
                <InputField placeholder="البريد الالكتروني" />
                <InputField placeholder="كلمة المرور" secured={true} />
                <InputField placeholder="تأكيد كلمة المرور" secured={true} />
                <MainButton text="تسجيل" />

                <Text style={[styles.forgotPassText]}>
                  ----------- أو -----------
                </Text>
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
                  <Text style={styles.loginText}>تمتلك حساب بالفعل</Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.loginLink}>تسجيل الدخول</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  }
}
