import Fonts from "./fonts";
import Colors from "./colors";
import { StatusBar, Dimensions } from "react-native";


const height = Dimensions.get('window').height;

const Globals = {
  mainContainer: (color = Colors.primary) => {
    return {
      paddingTop: StatusBar.currentHeight,
      backgroundColor: color,
        flex: 1,
    minHeight: height,
      
    };
  },
  inputField: {
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 18,
    fontFamily: Fonts.beinNormal,
    textAlign: "right",
    fontSize: 16,
    marginVertical: 10,
  },
  raduisBox: {
    borderRadius: 20,
    width: "100%",
    height: 50,
  },
  raduisBtn: {
    backgroundColor: Colors.primary,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.white,
    height: 50,
    fontSize: 18,
    borderRadius: 20,
    fontFamily: Fonts.beinNormal,
  },

  //Login ~ Register ~ Reset Password ~ OTP ~ Teacher Signup
  headerText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "800",
    color: Colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: Fonts.beinNormal,
    minHeight: 110,
    maxHeight: 130,
  },
  inputsBox: {
    flex: 4,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
      padding: 25,
    height: '100%',
  },

  //Icons
  googleIcon: {
    backgroundColor: "#EB4132",
    marginLeft: 20,
    padding: 10,
    borderRadius: 25,
    width: 50,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },

  //Frequently used
  normalText: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
  },
  normalLink: {
    fontFamily: Fonts.beinNormal,
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary,
    marginRight: 5,
  },
};

export default Globals;
