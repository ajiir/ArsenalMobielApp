import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { randomHex } from "randomize-hex";

const FlatListScreen = () => {
  const [text, setText] = useState("");
  const [persons, setPersons] = useState([
    { name: "Амраа", color: "#E71C23" },
    { name: "ajiir", color: "#192A56" },
    { name: "Tungaa", color: "#10A881" },
    { name: "Sodoo", color: "#FBD28B" },
    { name: "Bulgaa", color: "#2C3335" },
    { name: "Gerlee", color: "#BB2CD9" },
  ]);

  const handClick = (name) => {
    Alert.alert(name);
  };

  const addNewItem = () => {
    setPersons((persons) => [...persons, { name: text, color: randomHex() }]);
  };

  return (
    <View>
      <Text>{text}</Text>
      <View style={css.addContainer}>
        <MyInput
          style={css.addInput}
          onChangeText={(newtext) => setText(newtext)}
        />
        <MyButton title="Нэм" onPress={addNewItem} />
      </View>

      <FlatList
        keyExtractor={(element) => element.color}
        data={persons}
        renderItem={(element) => (
          <TouchableOpacity
            onPress={() => {
              handClick(element.item.name);
            }}
          >
            <View
              style={{
                backgroundColor: element.item.color,
                padding: 10,
                marginHorizontal: 20,
                marginTop: 20,
              }}
            >
              <Text>
                {element.index + 1}) {element.item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FlatListScreen;

const css = StyleSheet.create({
  addContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  addInput: {
    width: "70%",
  },
});
