import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Categories extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text> Categories </Text>
      </View>
    );
  }
}
