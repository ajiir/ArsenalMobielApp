import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawerNavigator from "./src/navigation/MyDrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawerNavigator />
    </NavigationContainer>
  );
}
