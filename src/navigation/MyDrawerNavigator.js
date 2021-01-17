import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import DrawerContent from "../components/DrawerContent";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="Нүүр" component={MyStackNavigator} />
    <Drawer.Screen name="Бүртгүүлэх" component={SignUpScreen} />
    <Drawer.Screen name="Нэвтрэх" component={LoginScreen} />
  </Drawer.Navigator>
);
