import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

// Custom Components
import SettingsOption from "../../components/SettingsOption";

//Customs
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";


class ChangePass extends Component {
  state = {
    videoRes: 720
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>التفضيلات</Text>
          <SettingsOption
            title="تشغيل المحاضرة / مواصلة المحاضرة في الخلفية"
            icon={false}
            leftArrow={false}
            switch
            noClick
            onValueChange={(value) => null}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>تنزيل الفيديو</Text>
          <SettingsOption
            title="تنزيل الفيديو عند تشغيل واي فاي فقط"
            icon={false}
            leftArrow={false}
            switch
            noClick
            onValueChange={(value) => null}
          />
          <SettingsOption
            title="تنزيل الفيديو الي الذاكرة الخارجية"
            icon={false}
            leftArrow={false}
            switch
            noClick
            onValueChange={(value) => null}
          />
          <SettingsOption
            title="جودة الفيديو المحمل"
            subTitle={this.state.videoRes}
            icon={false}
          />
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
  section: {
    marginVertical: 15,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.beinNormal,
    marginEnd: 15,
  }
});

export default ChangePass;
