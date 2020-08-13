import React, { Component } from "react";
import { View, Text } from "react-native";

class Home extends Component {
  state = {};
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>
        <Text>My Courses</Text>
      </View>
    );
  }
}

export default Home;
