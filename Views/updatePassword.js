import { useState } from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function UpdatePassword({ navigation }) {
  const [newPassword, setNewPassword] = useState(true);
  const [confirmNewPassword, setConfirmNewPassword] = useState(true);
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

  const checkPasswordFormat = (text, setMethod) => {
    setMethod(passwordRegex.test(text) || text.length == 0);
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
        <Text style={styles.loginTitle}>Recupera Contraseña</Text>
        <TextInput
          placeholderTextColor={"#444444"}
          onChangeText={(text) => checkPasswordFormat(text, setNewPassword)}
          style={[styles.input, !newPassword ? { borderColor: "red" } : ""]}
          placeholder="Nueva contraseña"
          secureTextEntry={true}
        />
        <TextInput
          placeholderTextColor={"#444444"}
          onChangeText={(text) => checkPasswordFormat(text, setConfirmNewPassword)}
          style={[
            styles.input,
            !confirmNewPassword ? { borderColor: "red" } : "",
          ]}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
        />
        <View style={{ display: "flex", gap: 20 }}>
          <Button
            
            color={"#355384"}
            title="Confirmar"
          ></Button>
          {/* <View style={{ maxWidth: "100%" }}>
            <Button
              onPress={() => navigation.navigate("forgotPassword")}
              title="¿Olvidaste tu contraseña?"
            ></Button>
          </View> */}
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
export default UpdatePassword;

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
