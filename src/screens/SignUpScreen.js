import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={css.image}
        source={require("../../assets/img/signUp.png")}
      />

      <MyInput
        placeholder="Утасны дугаараа оруулна уу"
        keyboardType="number-pad"
      />
      <MyInput placeholder="Нууц үгээ оруулна уу" secureTextEntry={true} />
      <MyInput placeholder="Нууц үг давтан оруулна уу" secureTextEntry={true} />
      <MyButton title="Бүртгүүлэх" style={{ marginTop: 20 }} />
      <MyButton title="Буцах" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SignUpScreen;

const css = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
  },
});
