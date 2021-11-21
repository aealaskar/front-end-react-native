import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

const DeleteButton = ({ productId }) => {
  return (
    <Button>
      <Text
        style={{ color: "white" }}
        onPress={() => cartStore.removeItemFromCart(productId)}
      >
        Delete
      </Text>
    </Button>
  );
};

export default observer(DeleteButton);
