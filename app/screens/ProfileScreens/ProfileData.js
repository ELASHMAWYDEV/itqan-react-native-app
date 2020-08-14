import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import ImageCircle from "../../components/ImageCircle";

//Customs
import Colors from "../../assets/colors";

class ProfileData extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageCircle
          icon="camera"
          size={24}
          leftMargin={1}
          onPress={() => null}
        />
        <View style={styles.inputsContainer}>
          <InputField placeholder="الاسم الأول" titleText />
          <InputField placeholder="الاسم الأخير" titleText />
          <InputField placeholder="البريد الالكتروني" titleText />
          <InputField placeholder="" titleText />
          <InputField placeholder="الجنس" titleText />
          <InputField placeholder="تاريخ الميلاد" titleText />
          <InputField placeholder="الكلية / المدرسة" titleText />
          <InputField placeholder="العنوان" titleText />
          <InputField placeholder="الدولة" titleText />
          <InputField placeholder="المنطقة / المحافظة" titleText />

          <MainButton text="حفظ" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
    paddingHorizontal: 25,
    marginBottom: 50,
  },
});

export default ProfileData;
