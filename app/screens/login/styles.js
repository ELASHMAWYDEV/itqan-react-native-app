import { StyleSheet } from 'react-native';
import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Globals from '../../assets/globals';

const styles = StyleSheet.create({
    container: {
        ...Globals.mainContainer(),
    },
    headerText: {
        ...Globals.headerText,
    },
    loginBox: {
        ...Globals.inputsBox
    },
    loginArea: {
        flex: 6,
        marginVertical: 20,
    },
    signinButton: {
        marginVertical: 20,
    },
    signinButtonText: {
        ...Globals.raduisBtn,
    },
    forgotPassText: {
        color: Colors.darkGray,
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 15,
    },
    signinIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        backgroundColor: '#EB4132',
        marginLeft: 20,
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    registerArea: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    registerText: {
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
    },
    registerLink: {
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.primary,
        marginRight: 5,
    }

});

export default styles;