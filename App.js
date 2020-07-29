import React, { Component } from "react";
import { View } from "react-native";
import * as Font from "expo-font";

//Screens
import Login from "./app/screens/login/login";
import Register from "./app/screens/register/register";


export default class App extends Component {
    state = {
        fontLoaded: false,
    };
    componentDidMount = () => {
        Font.loadAsync({
            "bein-normal": require("./app/assets/fonts/bein-normal.ttf"),
        }).then(() => this.setState({ fontLoaded: true }))
    };

    render() {
        return <View>{this.state.fontLoaded === true ? <Login /> : null}</View>;
    }
}
