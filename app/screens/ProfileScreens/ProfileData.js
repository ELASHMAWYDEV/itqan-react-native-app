import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-ionicons";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import ImageCircle from "../../components/ImageCircle";
import PhoneInput from "../../components/PhoneInput";
import SelectInput from "../../components/SelectInput";

//Customs
import Colors from "../../assets/colors";
import Globals from "../../assets/globals";
import Fonts from "../../assets/fonts";

class ProfileData extends Component {



  state = {
    user: {},
    genderSelectionVisible: false,
  };

  componentDidMount = async () => {
    //Get user from storage
    try {
      const user = await AsyncStorage.getItem("@user_data");

      if (user != null) {
        this.setState({ user: JSON.parse(user) });
        console.log(user);
      }
    } catch (e) {
      alert(e.message);
    }

    setTimeout(() => this.setState({ test: "hello" }), 1000);
  };

  getUser = async () => {


  }

  render() {
    let user = this.state.user;
    let genderSelection = [
      {
        label: "ذكر",
        value: "male",
      },
      {
        label: "أنثي",
        value: "female",
      },
    ];
    return (
      <ScrollView style={styles.container}>
        <ImageCircle
          icon="camera"
          size={24}
          leftMargin={1}
          onPress={() => null}
        />
        <View style={styles.inputsContainer}>
          <InputField
            placeholder="الاسم الأول"
            titleText
            value={user.firstName}
          />
          <InputField
            placeholder="الاسم الأخير"
            titleText
            value={user.lastName}
          />
          <InputField
            placeholder="البريد الالكتروني"
            titleText
            value={user.email}
          />
          <PhoneInput
            titleText
            onChangeCode={(countryCode) => this.setState({ countryCode })}
            onChangePhone={(phoneNumber) => this.setState({ phoneNumber })}
            countryCode={user.countryCode}
            phoneNumber={user.phoneNumber}
          />

          <Text style={styles.titleText}>الجنس</Text>
          <TouchableNativeFeedback
            useForeground
            onPress={() => {
              this.setState(
                (prevState) => ({ ...prevState, genderSelectionVisible: !this.state.genderSelectionVisible })
              );
            }}
          >
            <View style={styles.selectContainer}>
              <Text style={styles.selectedItem}>
                {genderSelection.find((selectedItem) =>
                  this.state.user.gender
                    ? selectedItem.value == this.state.user.gender
                    : (selectedItem.value = "male")
                ).label || "اختر"}
              </Text>
              <View style={styles.arrowIcon}>
                <Icon
                  name="ios-arrow-down"
                  size={28}
                  style={styles.icon}
                  color={Colors.darkGray}
                />
              </View>
              <SelectInput
                visible={this.state.genderSelectionVisible}
                selection={genderSelection}
                value={user.gender}
                onSelectValue={(value) =>
                  this.setState(prevState => ({
                    ...prevState,
                    user: { ...prevState.user, gender: value },
                  }))
                }
                toggleSelection={() =>
                  this.setState({ genderSelectionVisible: !this.state.genderSelectionVisible })
                }
              />
            </View>
          </TouchableNativeFeedback>

          <InputField
            placeholder="تاريخ الميلاد"
            titleText
            DatePicker
            onChangeDate={(event) => null}
            dateOfBirth={user.dateOfBirth}
            dateValue={user.dateOfBirth}
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
  titleText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.gray,
    fontSize: 18,
    marginTop: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  arrowIcon: {
    position: "absolute",
    zIndex: 2,
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "100%",
  },
  selectContainer: {
    ...Globals.inputField,
    ...Globals.raduisBox,
    overflow: "hidden",
    paddingHorizontal: 25,
  },
  selectedItem: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.lightGray,
    textAlign: "right",
    fontFamily: Fonts.beinNormal,
    fontSize: 18,
  },
});

export default ProfileData;
