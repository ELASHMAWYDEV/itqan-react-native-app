import { StyleSheet } from 'react-native';

import Globals from '../../assets/globals';

const styles = StyleSheet.create({
    container: {
        ...Globals.mainContainer(),
    },
    headerText: {
        ...Globals.headerText,
    },
    resetBox: {
        ...Globals.inputsBox,
    },
    resetArea: {
        marginVertical: 20,
        flex: 2
    },
    loginArea: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalText: {
        ...Globals.normalText,
    },
    normalLink: {
        ...Globals.normalLink,
    }
});


export default styles;