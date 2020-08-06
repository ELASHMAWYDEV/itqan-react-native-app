import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Auth Screens
import {
  Login,
  Register,
  Otp,
  ResetPassAsk,
  ResetPassSubmit,
} from './authScreens';



const AuthStack = createStackNavigator({
  Login: Login,
  Register: Register,
  ResetPassAsk: ResetPassAsk,
  ResetPassSubmit: ResetPassSubmit,
  Otp: Otp,
});



export default createAppContainer(
  createStackNavigator(
    {
    Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth'
    }
  )
)