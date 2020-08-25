import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import ImageCircle from "../../components/ImageCircle";
import PhoneInput from "../../components/PhoneInput";
import SelectInput from "../../components/SelectInput";

//Customs
import Colors from "../../assets/colors";

class ProfileData extends Component {
  state = {
    dateOfBirth: new Date(1598051730000),
    user: {}
  };


  componentDidMount = async () => {
    try {
      const user = await AsyncStorage.getItem("@user_data");
      
      
      if (user != null) {
        this.setState({ user: JSON.parse(user) });
      }

    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <ScrollView style={styles.container}>
        <ImageCircle
          icon="camera"
          size={24}
          leftMargin={1}
          onPress={() => null}
        />
        <View style={styles.inputsContainer}>
          <InputField placeholder="الاسم الأول" titleText value={user.firstName}/>
          <InputField placeholder="الاسم الأخير" titleText value={user.lastName}/>
          <InputField placeholder="البريد الالكتروني" titleText value={user.email}/>
          <PhoneInput
            titleText
            onChangeCode={(countryCode) => this.setState({ countryCode })}
            onChangePhone={(phoneNumber) => this.setState({ phoneNumber })}
            countryCode={user.countryCode}
            phoneNumber={user.phone}
          />
          <SelectInput
            placeholder="الجنس"
            titleText
            selection={[
              {
                label: "ذكر",
                value: "male",
              },
              {
                label: "أنثي",
                value: "female",
              },
            ]}
          />
          <InputField
            placeholder="تاريخ الميلاد"
            titleText
            DatePicker
            onChangeDate={(event) => null}
            dateOfBirth={this.state.dateOfBirth}
            value={this.state.dateOfBirth.getDay()}
          />
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
