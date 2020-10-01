import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

//Utilities
import Languages from "../../utility/Languages";
import pkg from "../../../package.json";

//Components
import ThreeDots from "../../components/ThreeDots";
import SettingsOption from "../../components/SettingsOption";
import ImageCircle from "../../components/ImageCircle";
import Prompt from "../../components/Prompt";

// Customs
import Colors from "../../assets/colors";

class ProfileSettings extends Component {
  state = {
    notificationsEnabled: true,
    language: Languages[0],
    logoutPrompt: false,
  };

  logout = async () => {
    this.props.route.params.logout();
  };

  changeLang = (newLang) => {
    this.setState({ language: newLang });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <ThreeDots {...this.props} />
        <ScrollView style={styles.container}>
          <ImageCircle onPress={() => navigation.navigate("ProfileData")} leftMargin={2}/>
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
            onPress={() => this.setState({ logoutPrompt: true })}
            lastItem
            leftArrow={false}
          />
          {this.state.logoutPrompt && (
            <Prompt
              message="هل أنت متأكد أنك تريد تسجيل الخروج ؟"
              prompt
              onSubmitValue={(value) => value ? this.logout() : this.setState({ logoutPrompt: false })}
              visible={this.state.logoutPrompt}
            />
          )}
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
