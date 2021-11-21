import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { observer } from "mobx-react";
import { baseURL } from "../stores/instance";
import { HStack, Pressable } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
      }}
    >
      <HStack>
        <Text>{shop.name}</Text>
        <Image
          source={{ uri: baseURL + shop.image }}
          style={{ width: 50, height: 50 }}
        />
      </HStack>
    </Pressable>
  );
};

export default observer(ShopItem);

const styles = StyleSheet.create({});
