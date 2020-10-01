import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


//Components
import CourseBadge from "../../components/CourseBadge";

//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";



//for test
import courses from "../../test/courses";

export default class Courses extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>دورات</Text>
        <View style={styles.coursesContainer}>
          <FlatList
            keyExtractor={item => item.id}
            data={courses}
            renderItem={({ item }) => <CourseBadge course={item} {...this.props}/>}
            numColumns={2}
            contentContainerStyle={styles.flatList}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    marginTop: 15
  },
  title: {
    fontFamily: Fonts.beinNormal,
    fontSize: 22,
    textAlign: "right"
  },
  coursesContainer: {
    paddingBottom: 60,
  },
  flatList: {
    justifyContent: 'center',
  }
})
