import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";


//Custom Components
import OtpInput from "../../components/OtpInput";
import MainButton from "../../components/MainButton";


//Globals
import Globals from '../../assets/globals';


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
              <MainButton text="تحقق" onPress={() => this.props.navigation.navigate("ResetPassSubmit")}/>
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




const styles = StyleSheet.create({
  container: {
      ...Globals.mainContainer(),
  },
  headerText: {
      ...Globals.headerText,
  },
  resetBox: {
      ...Globals.inputsBox,
  },
  resetArea: {
      marginVertical: 20,
      flex: 2
  },
  loginArea: {
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
  },
  normalText: {
      ...Globals.normalText,
  },
  normalLink: {
      ...Globals.normalLink,
  }
});
