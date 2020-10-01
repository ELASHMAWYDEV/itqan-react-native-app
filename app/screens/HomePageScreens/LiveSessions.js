import React, { Component } from 'react';
import { View, Text,StyleSheet, FlatList } from 'react-native';



//Globals
import Colors from "../../assets/colors";
import Fonts from "../../assets/fonts";


const materials = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "ملفات التعلم عن بعد"
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "ملفات التعلم عن بعد"
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "ملفات التعلم عن بعد"
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "ملفات التعلم عن بعد"
  }
]


export default class LiveSessions extends Component {


  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>جلسات مباشرة</Text>
      <View style={styles.coursesContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={materials}
          renderItem={({ item }) => <></>}
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