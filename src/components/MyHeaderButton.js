import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={35}
      color="white"
      {...props}
    />
  );
};

export default MyHeaderButton;

const styles = StyleSheet.create({});
