import React, { Component } from 'react';
import { View, Text } from 'react-native';


//Navigator
import FavouritesNavigator from "../../routes/FavouritesNavigator";

export default class Favourites extends Component {


  render() {
    return (
      <FavouritesNavigator />
    );
  }
}
