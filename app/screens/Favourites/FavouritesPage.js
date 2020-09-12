import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

//Components
import FavouriteCourse from "../../components/FavouriteCourse";

//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";

//for test
import courses from "../../test/courses";

export default class FavouritesPage extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.noticeText}>اضغط مطولا لحذف الدورة</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={courses}
          renderItem={({ item }) => (
            <>
              <FavouriteCourse course={item} />
              <FavouriteCourse course={item} />
            </>
          )}
          contentContainerStyle={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  flatList: { paddingHorizontal: 20, paddingTop: 5, paddingBottom: 60 },
  noticeText: {
    fontFamily: Fonts.beinNormal,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.darkGray,
  },
});
