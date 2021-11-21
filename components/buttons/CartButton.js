import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import { VStack, Badge } from "native-base";
import userAuthStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
import { View, Alert } from "react-native";
import { observer } from "mobx-react";
const CartButton = ({ navigation }) => {
  const handleSubmit = () => {
    if (userAuthStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Signin",
        "You need to Signin to access your cart",
        [
          { text: "Cancel", onPress: () => alert("Canceled"), style: "cancel" },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <View>
      <VStack>
        <Badge
          colorScheme="Blue"
          rounded="999px"
          mb={-3}
          mr={0}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{ fontSize: 12 }}
        >
          {cartStore.totalQuantity}
        </Badge>
        <Icon
          style={{ marginRight: 20 }}
          size={35}
          name="cart"
          onPress={() => {
            handleSubmit();
          }}
        />
      </VStack>
    </View>
  );
};

export default observer(CartButton);
