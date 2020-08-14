import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

//Utilities
import Languages from "../../utility/Languages";

// Custom Components
import SettingsOption from "../../components/SettingsOption";

//Customs
import Colors from "../../assets/colors";

class Language extends Component {
  state = {
    currentLanguage: this.props.route.params.currentLang,
  };

  changeLang = (newLanguage) => {
    this.setState({ currentLanguage: newLanguage });
    this.props.route.params.changeLang(newLanguage);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {Languages.map((lang, i) => (
          <SettingsOption
            key={i}
            title={lang.name}
            icon={false}
            leftArrow={false}
            checked={this.state.currentLanguage.code === lang.code}
            onPress={() => this.changeLang(lang)}
          />
        ))}
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
});

export default Language;
