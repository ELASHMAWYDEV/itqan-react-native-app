import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  StyleSheet,
} from "react-native";


//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";


//Globals
import Globals from '../../assets/globals';



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
