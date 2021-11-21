import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import userAuthStore from "../../stores/authStore";
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await userAuthStore.signIn(user);
    console.log(user);
  };
  return (
    <ScrollView>
      <Center>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                onChangeText={(username) =>
                  setUser({ ...user, username: username })
                }
                placeholder={"Username"}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={(password) =>
                  setUser({ ...user, password: password })
                }
                placeholder={"Password"}
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => {
                  navigation.navigate("Signup");
                }}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default observer(Signin);
