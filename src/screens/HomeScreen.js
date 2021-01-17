import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyHeaderButton from "../components/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const HomeScreen = ({ navigation }) => {
  const loginHandler = () => {
    navigation.navigate("Login");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Энэ бол нүүр хуудас</Text>
      <MyButton title="Нэвтрэх" onPress={loginHandler} style={{}} />
      <MyButton
        title="Бүртгүүлэх"
        onPress={() => navigation.navigate("SignUp")}
      />
      <MyButton title="Flatlist" onPress={() => navigation.navigate("List")} />
    </View>
  );
};

export default HomeScreen;
