import React from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

const MyButton = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[css.button, style]}>
        <Text style={css.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const css = StyleSheet.create({
  button: {
    marginVertical: 5,
    margin: 50,
    backgroundColor: "#FF3031",
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },

  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
