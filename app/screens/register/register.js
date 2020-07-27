import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    Button,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import Colors from "../../assets/colors";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";



export default class Login extends Component {
    state = {};
    componentDidMount = () => {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>تسجيل الدخول</Text>
                <View style={styles.loginBox}>
                    <View style={styles.loginArea}>
                        <TextInput
                            style={styles.inputField}
                            placeholder="البريد الالكتروني أو رقم الهاتف"
                            placeholderTextColor={Colors.darkGray}
                            autoCorrect={false}
                            
                        />
                        <TextInput
                            style={styles.inputField}
                            placeholder="كلمة المرور"
                            placeholderTextColor={Colors.darkGray}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            style={styles.signinButton}
                            activeOpacity={0.7}
                        >
                            <AntDesign
                                name="login"
                                size={24}
                                color={Colors.white}
                                style={styles.loginIcon}
                            />
                            <Text style={styles.signinButtonText}>
                                تسجيل الدخول
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.forgotPassText}>نسيت كلمة المرور ؟</Text>
                        <Text style={[styles.forgotPassText]}>-----------    أو    -----------</Text>
                        <View style={styles.signinIcons}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <Entypo name="facebook-with-circle" size={53} color="#395898" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <FontAwesome name="google" size={30} color="white" style={styles.googleIcon} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.registerArea}>
                        <KeyboardAvoidingView behavior="height">
                                <Text style={styles.registerText}>لاتمتلك حسابا لدينا ؟</Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                            >
                                <Text style={styles.registerLink}>سجل الأن</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>

                    </View>
                </View>
            </View>
        );
    }
}
