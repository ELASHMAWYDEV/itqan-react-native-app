import Fonts from './fonts';
import Colors from './colors';
import { StatusBar } from 'react-native';


const Globals = {
    mainContainer: (color = Colors.primary) => {
        return ({
            height: '100%',
            paddingTop: StatusBar.currentHeight,
            backgroundColor: color,
        })
    },
    inputField: {
        backgroundColor: Colors.lightGray,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 18,
        fontFamily: Fonts.beinNormal,
        textAlign: 'right',
        fontSize: 16,
        marginVertical: 10,

    },
    raduisBox: {
        borderRadius: 20,
        width: '100%',
        height: 50
    },
    raduisBtn: {
        backgroundColor: Colors.primary,
        textAlign: 'center',
        textAlignVertical: 'center',
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
        fontWeight: '800',
        color: Colors.white,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: Fonts.beinNormal
    },
    inputsBox: {
        flex: 4,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        
    }

}


export default Globals;