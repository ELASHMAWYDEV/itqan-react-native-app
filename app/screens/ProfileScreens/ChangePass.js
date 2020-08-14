import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";

//Customs
import Colors from "../../assets/colors";

class ChangePass extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.container}>
        <InputField placeholder="كلمة المرور القديمة" secured={true} />

        <InputField placeholder="كلمة المرور الجديدة" secured={true} />
        <InputField placeholder="تأكيد كلمة المرور الجديدة" secured={true} />
        <MainButton text="تغيير كلمة المرور" />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 40
  },
});



export default ChangePass;
