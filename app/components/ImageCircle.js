import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-ionicons";
import SvgUri from 'react-native-svg-uri';


//Customs
import Colors from "../assets/colors";

class ImageCircle extends Component {
  state = {};

  render() {
    const props = this.props;
    return (
      <View style={styles.photoContainer}>
        <View style={styles.photoCircle}>
          <View style={styles.photoWrapper}>
            <SvgUri
              style={styles.image}
              source={{ uri: props.uri }}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity style={styles.editBtn} activeOpacity={0.7} onPress={props.onPress}>
            <View>
              <Icon
                name={props.icon}
                size={props.size}
                color={Colors.white}
                style={{
                  left: props.leftMargin
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ImageCircle.defaultProps = {
  uri: "https://image.flaticon.com/icons/svg/560/560216.svg",
  icon: "create",
  size: 20,
  leftMargin: 2,
}


const styles = StyleSheet.create({
  photoContainer: {
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  photoCircle: {
    backgroundColor: Colors.lightGray,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  photoWrapper: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  editBtn: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 0
  },
})

export default ImageCircle;
