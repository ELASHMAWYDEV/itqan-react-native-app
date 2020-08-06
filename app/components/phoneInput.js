import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../assets/colors";
import Globals from "../assets/globals";
import Fonts from "../assets/fonts";

import Countries from "../utility/countryCodes";

class PhoneInput extends Component {
  state = {
    codeModal: false,
    countries: Countries,
    newCountries: Countries,
    phoneNumber: "",
    countryCode: Countries[0].dial_code,
  };

  componentDidMount = () => {
    this.props.onChangeCode(this.state.countryCode);
  }

  toggleCodeModal = () => {
    this.setState({ codeModal: !this.state.codeModal });
  };

  handleSearch = (query) => {
    query = query.toLowerCase();
    const countries = this.state.countries;
    let newCountries = countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(query) ||
        country.code.toLowerCase().includes(query)
      );
    });

    this.setState({ newCountries });
  };

  changePhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith('0')) {
      phoneNumber = phoneNumber.slice(1);
    }
    this.setState({ phoneNumber });
    this.props.onChangePhone(phoneNumber);
  };

  changeCountryCode = (countryCode) => {
    this.setState({ countryCode });
    this.props.onChangeCode(countryCode);
    this.toggleCodeModal();
  };


  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.inputField}
          placeholder="رقم الهاتف"
          placeholderTextColor={this.props.placeholderColor}
          autoCorrect={this.props.autoCorrect}
          secureTextEntry={this.state.secured}
          selectTextOnFocus={this.state.secured === true ? true : false}
          onChangeText={(value) => this.changePhoneNumber(value)}
        />
        <TouchableWithoutFeedback onPress={() => this.toggleCodeModal()}>
          <View style={style.codeContainer}>
            <Text style={style.code}>{this.state.countryCode}</Text>
            <Ionicons
              name="ios-arrow-down"
              size={20}
              color={Colors.black}
              style={style.arrow}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal
          style={style.codeListConatiner}
          visible={this.state.codeModal}
          animationType="slide"
          onRequestClose={this.toggleCodeModal}
        >
          <View style={style.searchHeader}>
            <View>
              <TextInput
                placeholder="ابحث باسم الدولة بالانجليزية"
                style={style.codeSearchField}
                onChangeText={(value) => this.handleSearch(value)}
              />
            </View>
            <TouchableWithoutFeedback onPress={this.toggleCodeModal}>
              <AntDesign
                name="closecircleo"
                size={24}
                color={Colors.white}
                style={style.searchClose}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={style.countriesContainer}>
            <FlatList
              style={style.codeList}
              data={this.state.newCountries}
              renderItem={(item) => (
                <TouchableNativeFeedback
                  useForeground
                  background={TouchableNativeFeedback.Ripple(Colors.darkGray)}
                  onPress={() => this.changeCountryCode(item.item.dial_code)}
                >
                  <View style={style.countryListItem}>
                    <Text style={style.countryCode}>{item.item.code}</Text>
                    <Text style={style.countryName}>{item.item.name}</Text>
                    <Text style={style.countryDialCode}>
                      {item.item.dial_code}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              )}
              keyExtractor={(item) =>
                this.state.countries.indexOf(item).toString()
              }
              ItemSeparatorComponent={() => (
                <View style={style.lineSeparator}></View>
              )}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
  },
  inputField: {
    ...Globals.inputField,
    width: "70%",
    alignSelf: "flex-end",
  },
  codeContainer: {
    flexDirection: "row-reverse",
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    marginVertical: 10,
    marginLeft: 15,
  },
  arrow: {
    marginRight: 10,
  },
  code: {
    fontFamily: Fonts.beinNormal,
    fontSize: 18,
  },
  codeList: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,
    backgroundColor: Colors.darkGray,
    width: "100%",
    height: 300,
  },
  searchHeader: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  searchClose: {
    padding: 15,
    marginLeft: "auto",
  },
  codeSearchField: {
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 24,
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 25,
    maxWidth: "100%",
    width: 300,
  },
  codeList: {
    marginBottom: 90,
  },
  lineSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.darkGray,
  },
  countryListItem: {
    fontFamily: Fonts.beinNormal,
    color: Colors.black,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  countryCode: {
    width: 25,
    marginRight: 15,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 14,
    fontFamily: Fonts.beinNormal,
  },
  countryName: {
    fontSize: 18,
    fontFamily: Fonts.beinNormal,
    marginRight: 5,
  },
  countryDialCode: {
    fontSize: 18,
    fontFamily: Fonts.beinNormal,
    marginLeft: "auto",
    marginRight: 15,
  },
});

PhoneInput.defaultProps = {
  placeholder: "",
  placeholderColor: Colors.darkGray,
  autoCorrect: false,
  secured: false,
};

export default PhoneInput;
