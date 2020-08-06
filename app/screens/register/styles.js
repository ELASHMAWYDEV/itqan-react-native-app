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
    registerBox: {
        ...Globals.inputsBox
    },
    registerArea: {
        flex: 6,
        marginVertical: 20,
    },
    termsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
        
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
    },
    grayText: {
        color: Colors.darkGray,
        fontFamily: Fonts.beinNormal,
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 15,
    },
    normalText: {
        ...Globals.normalText,
    },
    normalLink: {
        ...Globals.normalLink,
    }

});

export default styles;