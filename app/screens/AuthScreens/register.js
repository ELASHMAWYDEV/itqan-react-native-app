import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  LayoutAnimation,
  StyleSheet,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

import { FontAwesome, Entypo } from "@expo/vector-icons";

//Custom Components
import InputField from "../../components/InputField";
import MainButton from "../../components/MainButton";
import PhoneInput from "../../components/PhoneInput";
import Loading from "../../components/LoadingModal";


//Globals
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Globals from '../../assets/globals';


export default class Register extends Component {
  state = {
    loading: false,
    termsChecked: false,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  toggleCheckBox = (value) => {
    this.setState({ termsChecked: value });
  };

  alertInputs = () => {
    alert(`phone: ${this.state.phoneNumber}\ncode: ${this.state.countryCode}`);
  };


  register = async () => {
    this.setState({ loading: true }); //Loading modal will appear until the fetch is done

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phoneNumber = this.state.phoneNumber;
    const countryCode = this.state.countryCode;
    const email = this.state.email;
    const password = this.state.password;



    console.log(JSON.stringify({
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      email,
      password,
    }));
    return;
    try {
      const accessToken = await AsyncStorage.getItem("@access_token");

      const response = await fetch(`${Config.api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          countryCode,
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.success && data.accessToken) {
        await AsyncStorage.setItem("@access_token", data.accessToken);
        await AsyncStorage.setItem("@user_data", JSON.stringify(data.user));
        this.props.route.params.login();
      } else {
        this.setState({ loading: false });

        return alert(JSON.stringify(data, null, 2));
      }
      this.setState({ loading: false });
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <ScrollView>
      {this.state.loading && <Loading />}
        <View style={styles.container}>
          <Text style={styles.headerText}>التسجيل</Text>
          <View style={styles.registerBox}>
            <View style={styles.registerArea}>
              <InputField
                placeholder="الاسم الأول"
                onChangeText={(firstName) => this.setState({ firstName })}
              />
              <InputField
                placeholder="الاسم الأخير"
                onChangeText={(lastName) => this.setState({ lastName })}
              />
              <PhoneInput
                onChangeCode={(countryCode) => this.setState({ countryCode })}
                onChangePhone={(phoneNumber) => this.setState({ phoneNumber })}
              />
              <InputField
                placeholder="البريد الالكتروني"
                onChangeText={(email) => this.setState({ email })}
              />
              <InputField
                placeholder="كلمة المرور"
                secured={true}
                onChangeText={(password) => this.setState({ password })}
              />
              <InputField
                placeholder="تأكيد كلمة المرور"
                secured={true}
                onChangeText={(passwordConfirm) =>
                  this.setState({ passwordConfirm })
                }
              />
              <View style={styles.termsContainer}>
                <CheckBox
                  onValueChange={(value) => this.toggleCheckBox(value)}
                  value={this.state.termsChecked}
                />
                <Text style={styles.normalText}>
                  بإنشائك للحساب يعني موافقتك على
                </Text>
                <TouchableOpacity>
                  <Text style={styles.normalLink}>الشروط والأحكام</Text>
                </TouchableOpacity>
              </View>
              <MainButton text="تسجيل" onPress={this.register} />

              <Text style={styles.grayText}>----------- أو -----------</Text>
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
                <Text style={styles.normalText}>تمتلك حساب بالفعل</Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={styles.normalLink}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    تسجيل الدخول
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
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
  registerBox: {
      ...Globals.inputsBox
  },
  registerArea: {
      flex: 6,
      marginVertical: 20,
  },
  termsContainer: {
      flexDirection: 'row-reverse',
      alignItems: 'center'
      
  },  
  registerIcons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  googleIcon: {
      ...Globals.googleIcon,
  },
  loginArea: {
      flex: 1,
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
  },
  grayText: {
      color: Colors.darkGray,
      fontFamily: Fonts.beinNormal,
      fontSize: 16,
      textAlign: 'center',
      paddingVertical: 15,
  },
  normalText: {
      ...Globals.normalText,
  },
  normalLink: {
      ...Globals.normalLink,
  }

});
