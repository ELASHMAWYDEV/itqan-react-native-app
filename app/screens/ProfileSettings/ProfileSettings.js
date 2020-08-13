import React, { Component } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

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
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <ThreeDots {...this.props} />
        <ScrollView style={styles.container}>
          <ImageCircle onPress={() => navigation.navigate("Language")}/>
          <SettingsOption
            icon="ios-globe"
            title="اللغة"
            subTitle="العربية"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="ios-lock"
            title="تغيير كلمة المرور"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="settings"
            title="التفضيلات"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="notifications"
            title="الإشعارات"
            leftArrow={false}
            switch
            enabled={this.state.notificationsEnabled}
            noClick
          />
          <SettingsOption
            icon="ios-help-circle"
            title="اتصل بنا"
            onPress={() => navigation.navigate("Language")}
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
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="ios-information-circle"
            title="الشروط والأحكام"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="ios-share-alt"
            title="مشاركة التطبيق"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="ios-star"
            title="تقييم التطبيق"
            onPress={() => navigation.navigate("Language")}
          />
          <SettingsOption
            icon="ios-log-out"
            title="تسجيل الخروج"
            onPress={() => navigation.navigate("Language")}
            lastItem
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
  }
});

export default ProfileSettings;
