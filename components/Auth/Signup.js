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
  ScrollView,
} from "native-base";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import userAuthStore from "../../Stores/authStore";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async () => {
    await userAuthStore.signUp(user);
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
            Signup to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
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
              <FormControl.Label>Email</FormControl.Label>
              <Input
                onChangeText={(email) => setUser({ ...user, email: email })}
                placeholder={"E-mail"}
              />
              <FormControl.Label>First Name</FormControl.Label>
              <Input
                onChangeText={(firstName) =>
                  setUser({ ...user, firstName: firstName })
                }
                placeholder={"First Name"}
              />
              <FormControl.Label>Last Name</FormControl.Label>
              <Input
                onChangeText={(lastName) =>
                  setUser({ ...user, lastName: lastName })
                }
                placeholder={"Last Name"}
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
              Sign Up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {"Already have an account "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default observer(Signup);
