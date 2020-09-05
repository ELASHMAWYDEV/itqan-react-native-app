import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Icon from "react-native-ionicons";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

export default class CourseBadge extends Component {
  static defaultProps = {
    course: {
      id: 0,
      title: "العنوان",
      price: 100,
    },
  };

  render() {
    let course = this.props.course;
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => null} background={TouchableNativeFeedback.Ripple(Colors.darkGray)}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri:
                  course.imageUrl ||
                  "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              }}
            />
            <View style={styles.courseInfo}>
              <Text style={styles.title} numberOfLines={1}>{course.title}</Text>
              <View style={styles.priceContainer}>
                <Icon
                  style={styles.priceTag}
                  name="ios-pricetags"
                  size={20}
                  color={Colors.darkGray}
                />
                <Text style={styles.priceText}>${course.price.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: Colors.white,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 120,
  },
  courseInfo: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "flex-end",
  },
  title: {
    fontFamily: Fonts.beinNormal,
    fontSize: 14,
  },
  priceContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 2,
  },
  priceTag: {
    transform: [{ translateY: 1 }, { rotate: "270deg" }],
  },
  priceText: {
    color: Colors.primary,
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "700",
    marginEnd: 10,
  },
});
