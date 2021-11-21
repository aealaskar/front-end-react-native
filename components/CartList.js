import { observer } from "mobx-react";
import { ScrollView, Button } from "native-base";
import React from "react";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem navigation={navigation} item={item} key={item.product._id} />
  ));
  return (
    <ScrollView>
      {cartList}
      <Button
        onPress={() => {
          cartStore.checkOutCart();
        }}
      >
        Checkout
      </Button>
    </ScrollView>
  );
};

export default observer(CartList);
