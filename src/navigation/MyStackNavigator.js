import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import FlatListScreen from "../screens/FlatListScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF3031",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontSize: 20,
      },
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Нүүр хуудас",
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Нэвтрэх" }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: "Бүртгүүлэх хэсэг" }}
    />
    <Stack.Screen
      name="List"
      component={FlatListScreen}
      options={{ title: "List" }}
    />
  </Stack.Navigator>
);
