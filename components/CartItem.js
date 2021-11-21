import { observer } from "mobx-react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
} from "native-base";
import { useState } from "react";
import React from "react";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";
import DeleteButton from "./buttons/DeleteButton";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAdd = () => {
    cartStore.addItemToCart(item.product, quantity);
  };

  return (
    <Center>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={30 / 9}>
            <Image
              source={{
                uri: item.product.image,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="1" space={3}>
          <Stack space={3}>
            <Heading size="md" ml="-1" name="product">
              {item.product.name}
            </Heading>
          </Stack>
          <Text fontWeight="400">Quantity: {item.quantity}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                ${item.product.price}
              </Text>
            </HStack>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                Total Price ${+item.product.price * +item.quantity}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <NumericInput
          value={quantity}
          onChange={(value) => setQuantity(value)}
          minValue={0}
        />
        <Button onPress={handleAdd}>Add</Button>
        <DeleteButton productId={item.product._id} />
      </Box>
    </Center>
  );
};

export default observer(CartItem);
