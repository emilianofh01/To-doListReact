import LoginView from "./Views/logIn";
import ForgotPassword from "./Views/forgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdatePassword from "./Views/updatePassword";
import SignUp from "./Views/signUp";
import ListView from "./Views/ListView";
import { StatusBar, StyleSheet } from "react-native";

export default function App() {
  // const onTextChanged = ({ callback = Function }) => {};

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="listView"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            shadowOpacity: 0,
            backgroundColor: "#3a5f93",
          },
          statusBarColor: "#3a5f93",
          headerTintColor: "white",
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

        <Stack.Screen
          name="listView"
          component={ListView}
          options={{
            headerBackVisible: false,
            headerTitle: "To-do list",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#3a5f93',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export const globalStyles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: "#3a5f93",
    backgroundColor: 'white',
    // marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontWeight: "800",
  },
})
