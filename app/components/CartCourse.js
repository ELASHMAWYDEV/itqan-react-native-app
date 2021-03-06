import React from "react";
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

export default CartCourse = (props) => {
  let course = props.course;

  return (
    <View style={styles.contianer}>
      <TouchableNativeFeedback
        onLongPress={() => null}
        onPress={() => null}
      >
        <View style={styles.courseContainer}>
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
            <View style={styles.rateContainer}>
              <Icon name="ios-star" size={20} color={Colors.orange} />
              <View style={styles.rate}>
                <Text style={styles.rateText}>
                  {course.rate.toFixed(1)} ({course.numOfRates})
                </Text>
              </View>
            </View>
            <View style={styles.authorContianer}>
              <Image
                source={{
                  uri: course.author.imageUrl,
                }}
                style={styles.authorImage}
              />
              <Text style={styles.authorName}>{course.author.name}</Text>
            </View>
            <Text style={styles.courseTitle} numberOfLines={2}>
              {course.title}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

CartCourse.defaultProps = {
  course: {
    id: 0,
    title: "العنوان",
    price: 100,
    rate: 4.54,
    numOfRates: 30,
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
  rateContainer: {
    position: "absolute",
    top: 10,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  rate: {
    backgroundColor: "rgba(255,172,65,0.3)",
    paddingHorizontal: 8,
    marginLeft: 5,
    borderRadius: 10,
  },
  rateText: {
    fontFamily: Fonts.beinNormal,
    color: Colors.orange,
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
    paddingVertical: 10,
  },
  authorContianer: {
    flexDirection: "row-reverse",
    alignItems: "center",
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
    fontSize: 12,
  },
  courseTitle: {
    flex: 1,
    fontFamily: Fonts.beinNormal,
    fontSize: 15,
    marginTop: 10,
    lineHeight: 26,
    textAlignVertical: "center",
  },
});
