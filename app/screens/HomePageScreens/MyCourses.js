import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


//Components
import CourseBadge from "../../components/CourseBadge";

//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";



////////////For Development Only/////////////
const courses = [
  {
    id: 1,
    title: "دورة تعلم مهارات الرسم",
    price: 20,
    imageUrl: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    title: "دورة تعلم مهارات الرسم",
    price: 30,
    imageUrl: "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    title: "دورة تعلم مهارات الرسم",
    price: 40,
    imageUrl: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    title: "دورة تعلم مهارات الرسم باستخدام أدوبي فوتوشوب",
    price: 60,
  }
]
/////////////////////////////////////////
export default class MyCourses extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>دوراتي</Text>
        <View style={styles.coursesContainer}>
          <FlatList
            keyExtractor={item => item.id}
            data={courses}
            renderItem={({ item }) => <CourseBadge course={item}/>}
            numColumns={2}
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
    paddingBottom: 60
  }
})
