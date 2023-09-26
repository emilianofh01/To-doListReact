import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Animated,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginView from "./Views/logIn";
import ForgotPassword from "./Views/forgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdatePassword from "./Views/updatePassword";
import SignUp from "./Views/signUp";

export default function App() {
  // const onTextChanged = ({ callback = Function }) => {};

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            shadowOpacity: 0,
            backgroundColor: "#3a5f93",
          },
          headerTintColor: 'white',
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{
            headerTitle: "Olvide mi contraseña",
          }}
        />
        <Stack.Screen
          name="updatePassword"
          component={UpdatePassword}
          options={{
            headerTitle: "Recuperar contraseña",
          }}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{
            headerTitle: "Registrar cuenta",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
