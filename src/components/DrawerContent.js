import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 30,
            marginTop: 15,
            marginBottom: 20,
          }}
        >
          <Avatar.Image
            source={require("../../assets/img/signUp.png")}
            size={50}
          />
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Title
              style={{
                fontSize: 16,
                marginTop: 3,
                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              Э.Алтанхуяг
            </Title>
            <Caption style={{ lineHeight: 12 }}>Admin</Caption>
          </View>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <Drawer.Section>
            <Drawer.Item
              label="Нүүр"
              icon={({ color, size }) => (
                <Icon name="home-circle" color={color} size={size} />
              )}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              label="Нэвтрэх"
              icon={({ color, size }) => (
                <Icon name="login-variant" color={color} size={size} />
              )}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              label="Бүртгүүлэх"
              icon={({ color, size }) => (
                <Icon name="folder-open-outline" color={color} size={size} />
              )}
            />
          </Drawer.Section>
          <Drawer.Section>
            <Drawer.Item
              label="Гарах"
              icon={({ color, size }) => (
                <Icon name="location-exit" color={color} size={size} />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
