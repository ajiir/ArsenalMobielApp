import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Image
        style={css.image}
        source={require("../../assets/img/LoginArsenal.png")}
      />

      <Text style={css.text}>
        {phone} - {password}
      </Text>

      <MyInput
        placeholder="Утасны дугаар"
        onChangeText={setPhone}
        keyboardType="number-pad"
      />
      <MyInput
        placeholder="Нууц үг"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <MyButton
        title="Нэвтрэх"
        style={{ marginTop: 20 }}
        onPress={loginHandler}
      />
      <MyButton title="Буцах" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default LoginScreen;

const css = StyleSheet.create({
  image: {
    width: "100%",
    height: "50%",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
