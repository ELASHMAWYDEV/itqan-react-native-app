import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import Icon from "react-native-ionicons";

//Globals
import Colors from "../assets/colors";
import Fonts from "../assets/fonts";

export default class FavouriteCourse extends Component {
  state = {
    courseLeft: new Animated.Value(0),
    courseScale: new Animated.Value(1),
  };

  static defaultProps = {
    course: {
      id: 0,
      title: "العنوان",
      price: 100,
      imageUrl:
        "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      author: {
        id: 0,
        name: "اسم المعلم",
        imageUrl:
          "https://ohsobserver.com/wp-content/uploads/2017/09/DrHendrickson-800x1200.jpg",
      },
    },
  };

  moveCourse = () => {
    !this.state.openDelete
      ? Animated.timing(this.state.courseLeft, {
          toValue: 80,
          duration: 200,
          useNativeDriver: false,
        }).start(() => this.setState({ openDelete: true }))
      : Animated.timing(this.state.courseLeft, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start(() => this.setState({ openDelete: false }));
  };

  deleteCourse = () => {
    Animated.timing(this.state.courseScale, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => this.setState({ deleted: true }));
  };

  render() {
    const course = this.props.course;
    return (
      !this.state.deleted && (
        <Animated.View
          style={[
            styles.contianer,
            { transform: [{ scale: this.state.courseScale }] },
          ]}
        >
          <TouchableNativeFeedback onPress={() => this.deleteCourse()}>
            <View style={styles.deleteContainer}>
              <Icon
                name="trash"
                size={34}
                color={Colors.white}
                style={styles.deleteIcon}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onLongPress={this.moveCourse}
            onPress={() => {
              this.state.openDelete && this.moveCourse();
            }}
          >
            <Animated.View
              style={[styles.courseContainer, { left: this.state.courseLeft }]}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: course.imageUrl,
                  }}
                  style={styles.image}
                />
                <View style={styles.iconImageContainer}>
                  <Icon
                    name="cart"
                    size={26}
                    color={Colors.white}
                    style={{
                      transform: [{ translateX: -2 }, { translateY: 2 }],
                    }}
                  />
                </View>
              </View>
              <View style={styles.courseInfo}>
                <View style={styles.authorContianer}>
                  <Image
                    source={{
                      uri: course.author.imageUrl,
                    }}
                    style={styles.authorImage}
                  />
                  <Text style={styles.authorName}>{course.author.name}</Text>
                </View>
                <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
              </View>
            </Animated.View>
          </TouchableNativeFeedback>
        </Animated.View>
      )
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    height: 100,
    elevation: 5,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: Colors.white,
    marginBottom: 15,
  },
  deleteContainer: {
    width: 80,
    height: "100%",
    backgroundColor: Colors.red,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    transform: [{ translateY: 2 }],
  },
  courseContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: Colors.white,
    flexDirection: "row-reverse",
  },
  imageContainer: {
    width: "30%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  iconImageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 8,
    borderTopRightRadius: 15,
  },
  courseInfo: {
    width: "70%",
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  authorContianer: {
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  authorImage: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 25 / 2,
  },
  authorName: {
    fontFamily: Fonts.beinNormal,
    marginHorizontal: 10,
    fontSize: 12
  },
  courseTitle: {
    fontFamily: Fonts.beinNormal,
    fontSize: 15,
    marginTop: 10,
    lineHeight: 26,
  }
});
