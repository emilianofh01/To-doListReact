import { useState } from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function SignUp({ navigation }) {
    const [validName, setValidName] = useState();
  const [validEmail, setValidEmail] = useState();
  const [validPassword, setValidPassword] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    setValidEmail(emailRegex.test(email));
    setValidPassword(passwordRegex.test(password));
    setValidName(nameRegex.test(name))
  };

  return (
    <View style={styles.container}>
      <Animated.View View style={styles.imageContainer}>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontFamily: "Roboto",
            marginBottom: 10,
          }}
        >
          To-Do
        </Text>
        <Text style={{ width: 250, fontSize: 20, color: "white" }}>
          Una app para lograr el orden en tu dia
        </Text>
        {/* <Image
          style={styles.logo}
          source={require("./assets/logo.jpg")}
        ></Image> */}
      </Animated.View>
      <View style={styles.inputsContainer}>
        <Text style={styles.loginTitle}>Registrar cuenta</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          placeholderTextColor={"#444444"}
          style={[
            styles.input,
            !validName && validName != undefined
              ? { borderColor: "red" }
              : "",
          ]}
          placeholder="Nombre"
        ></TextInput>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={"#444444"}
          style={[
            styles.input,
            !validEmail && validEmail != undefined
              ? { borderColor: "red" }
              : "",
          ]}
          placeholder="Email"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          placeholderTextColor={"#444444"}
          onChangeText={(text) => setPassword(text)}
          style={[
            styles.input,
            !validPassword && validPassword != undefined
              ? { borderColor: "red" }
              : "",
          ]}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <View style={{ display: "flex", gap: 20 }}>
          <Button
            onPress={logIn}
            color={"#355384"}
            title="Crear cuenta"
          ></Button>
          
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    minHeight: 250,
    height: "40%",
    backgroundColor: "#3a5f93",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    // paddingVertical: 20
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
