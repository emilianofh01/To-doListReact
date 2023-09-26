import { useState } from "react";
import { Animated, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginView({ navigation }) {

    const [validEmail, setValidEmail] = useState();
  const [validPassword, setValidPassword] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const logIn = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    setValidEmail(emailRegex.test(email));
    setValidPassword(passwordRegex.test(password));
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
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
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
            title="Iniciar Sesión"
          ></Button>
          <View style={{ maxWidth: "100%" }}>
            <Button onPress={() => navigation.navigate('forgotPassword')} title="¿Olvidaste tu contraseña?"></Button>
          </View>
          <View style={{ maxWidth: "100%" }}>
            <TouchableOpacity style={{paddingVertical: 15}}>
                <Text onPress={() => navigation.navigate('signUp')} style={{textAlign: "center", fontWeight: '900', color: '#345384'}}>Registrar cuenta</Text>
            </TouchableOpacity>
            {/* <Button onPress={() => navigation.navigate('forgotPassword')} title="¿Olvidaste tu contraseña?"></Button> */}
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
export default LoginView;

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
