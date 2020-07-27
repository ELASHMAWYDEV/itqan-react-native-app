import Colors from '../../assets/colors';
import Fonts from '../../assets/fonts';
import Globals from '../../assets/globals';

const styles = {
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
    inputField: {
        ...Globals.inputField, 
        marginVertical: 10,
    },
    signinButton: {
        marginVertical: 20,
    },
    signinButtonText: {
        ...Globals.raduisBtn,  
    },
    loginIcon: {
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
        layoutDirection: 'rtl',
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

}

export default styles;