import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [validEmail, setValidEmail] = useState();
  const [validPassword, setValidPassword] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const logIn = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;


    setValidEmail(emailRegex.test(email));
    setValidPassword(passwordRegex.test(password));
    console.log(validEmail, validPassword);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.jpg")}
        ></Image>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.loginTitle}>LogIn</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholderTextColor={"#444444"}
          style={[styles.input, !validEmail && validEmail!=undefined ? {borderColor: 'red'}:'']}
          placeholder="Email"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          onChangeText={text => setPassword(text)}
          style={[styles.input, !validPassword && validPassword!=undefined ? {borderColor: 'red'}:'']}
          placeholder="Contraseña"
          keyboardType="visible-password"
          secureTextEntry={true}
        />
        <View style={{display: 'flex', gap: 20}}>
          <Button onPress={logIn} color={"#355384"} title="Iniciar Sesión"></Button>
          <View style={{maxWidth:'100%'}}>
            <Button title="¿Olvidaste tu contraseña?"></Button>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // borderRadius: 500,
    width: 200,
    height: 200,
  },
  inputsContainer: {
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    paddingHorizontal: 20,
  },
  loginTitle: {
    paddingVertical: 20,
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    // width: '85%',
    height: 50,
    borderWidth: 2,
    borderColor: "#3a5f93",
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontWeight: "800",
  },

  button: {
    width: "85%",
  },
});
