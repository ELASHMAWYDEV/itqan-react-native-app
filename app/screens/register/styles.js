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
        minHeight: 130,
    },
    registerBox: {
        ...Globals.inputsBox
    },
    registerArea: {
        flex: 6,
        marginVertical: 20,
    },
    inputField: {
        ...Globals.inputField,
        marginVertical: 10,
    },
    registerButton: {
        marginVertical: 20,
        ...Globals.raduisBtn,
        overflow: 'hidden',
    },
    registerButtonText: {
        ...Globals.raduisBtn,
    },
    registerIcon: {
        position: 'absolute',
        top: 13,
        left: 18,
        zIndex: 2,
        transform: [{ rotateY: "180deg" }],
    },
    forgotPassText: {
        color: Colors.darkGray,
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 15,
    },
    registerIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleIcon: {
        ...Globals.googleIcon,
    },
    loginArea: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    loginText: {
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
    },
    loginLink: {
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
        color: Colors.primary,
        marginRight: 5,
    }

});

export default styles;