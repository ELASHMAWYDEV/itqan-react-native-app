import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";


//Utilities
import Languages from "../../utility/Languages";
import pkg from "../../../package.json";

//Components
import ThreeDots from "../../components/ThreeDots";
import SettingsOption from "../../components/SettingsOption";
import ImageCircle from "../../components/ImageCircle";

// Customs
import Colors from "../../assets/colors";

class ProfileSettings extends Component {
  state = {
    notificationsEnabled: true,
    language: Languages[0],
  };


  logout = async () => {
    try {
      await AsyncStorage.removeItem("@access_token");
      await AsyncStorage.removeItem("@user_data");
      this.props.route.params.logout();
    } catch (e) {
      console.log(e.message);
    }
  }

  changeLang = (newLang) => {
    this.setState({ language: newLang });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <ThreeDots {...this.props} />
        <ScrollView style={styles.container}>
          <ImageCircle onPress={() => navigation.navigate("ProfileData")} />
          <SettingsOption
            icon="ios-globe"
            title="اللغة"
            subTitle={this.state.language.name}
            onPress={() =>
              navigation.navigate("Language", {
                currentLang: this.state.language,
                changeLang: (newLang) => this.changeLang(newLang),
              })
            }
            
          />
          <SettingsOption
            icon="ios-lock"
            title="تغيير كلمة المرور"
            onPress={() => navigation.navigate("ChangePass")}
          />
          <SettingsOption
            icon="settings"
            title="التفضيلات"
            onPress={() => navigation.navigate("Preferences")}
          />
          <SettingsOption
            icon="notifications"
            title="الإشعارات"
            leftArrow={false}
            switch
            enabled={this.state.notificationsEnabled}
            noClick
            onValueChange={(value) => console.log(value)}
          />
          <SettingsOption
            icon="ios-help-circle"
            title="اتصل بنا"
            onPress={() => null}
          />
          <SettingsOption
            icon="phone-portrait"
            title="اصدار التطبيق"
            subTitle={pkg.version}
            leftArrow={false}
            noClick
          />
          <SettingsOption
            icon="ios-download"
            title="تنزيل الفيديو"
            onPress={() => null}
          />
          <SettingsOption
            icon="ios-information-circle"
            title="الشروط والأحكام"
            onPress={() => null}
            leftArrow={false}
          />
          <SettingsOption
            icon="ios-share-alt"
            title="مشاركة التطبيق"
            onPress={() => null}
            leftArrow={false}

          />
          <SettingsOption
            icon="ios-star"
            title="تقييم التطبيق"
            onPress={() => null}
            leftArrow={false}

          />
          <SettingsOption
            icon="ios-log-out"
            title="تسجيل الخروج"
            onPress={() => this.logout()}
            lastItem
            leftArrow={false}
          />
          <View style={styles.emptySpace}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "100%",
  },

  emptySpace: {
    height: 40,
  },
});

export default ProfileSettings;
