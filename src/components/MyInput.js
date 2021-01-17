import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MyInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[css.InputForm, props.style]}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default MyInput;

const css = StyleSheet.create({
  InputForm: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    padding: 10,
  },
});
