import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";

// Custom Components
import SettingsOption from "../../components/SettingsOption";

//Customs
import Colors from "../../assets/colors";

class VideoRes extends Component {
  state = {
    currentResolution: this.props.route.params.currentRes,
  };

  changeRes = (newResolution) => {
    this.setState({ currentResolution: newResolution });
    this.props.route.params.changeResolution(newResolution);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.route.params.resolutions.map((res, i) => (
          <SettingsOption
            key={i}
            title={res}
            icon={false}
            leftArrow={false}
            checked={this.state.currentResolution === res}
            onPress={() => this.changeRes(res)}
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

export default VideoRes;
