import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

//Screens
import {
  ShoppingCart,
  PayCard,
  PayPaypal,
  PayConfirm,
  PaySelect,
} from "../screens/ShoppingCartScreens/index";

const Stack = createStackNavigator();

export default CartNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="ShoppingCart"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      
    >
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="PaySelect" component={PaySelect} />
      <Stack.Screen name="PayCard" component={PayCard} />
      <Stack.Screen name="PayPaypal" component={PayPaypal} />
      <Stack.Screen name="PayConfirm" component={PayConfirm} />
    </Stack.Navigator>
  );
};
