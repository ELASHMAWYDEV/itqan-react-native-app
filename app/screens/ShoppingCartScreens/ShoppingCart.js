import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-ionicons";

//Assets
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";
import Globals from "../../assets/globals";

//Components
import CartCourse from "../../components/CartCourse";

export default ShoppingCart = (props) => {
  const window = useWindowDimensions();

  return (
    <View style={[styles.container, { height: window.height }]}>
      <View style={styles.header}>
        <View style={styles.headerRight}></View>
        <Text style={styles.headerTitle}>عربة الشراء</Text>
        <TouchableNativeFeedback
          onPress={() => props.navigation.goBack()}
          useForeground
        >
          <View style={styles.headerLeft}>
            <Icon name="ios-arrow-back" size={34} color={Colors.gray} />
          </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView style={styles.coursesContainer}>
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
        <CartCourse {...props} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>المجموع الكلي</Text>
          <Text style={styles.totalPrice}>$95</Text>
        </View>
        <TouchableNativeFeedback
          onPress={() => props.navigation.navigate("PaySelect")}
        >
          <View>
            <Text style={styles.payBtn}>الذهاب للدفع</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.lightGray,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Fonts.beinNormal,
    textAlign: "center",
    flex: 4,
  },
  headerRight: {
    flex: 1,
  },
  headerLeft: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginLeft: 15,
  },
  coursesContainer: {
    paddingHorizontal: 18,
    paddingVertical: 25,
  },
  bottomContainer: {
    paddingHorizontal: 18,
    marginBottom: 20
  },
  totalContainer: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10
  },
  totalText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 18
  },
  totalPrice: {
    fontFamily: Fonts.beinNormal,
    fontSize: 22,
    color: Colors.primary

  },
  payBtn: {
    ...Globals.raduisBtn
  },
});
