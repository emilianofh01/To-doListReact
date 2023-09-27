import { useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Icon } from "@rneui/themed";
import { globalStyles } from "../App";

function ListView() {
  let [tempText, setTempText] = useState("");
  let [data, setData] = useState([]);

  const addItem = () => {
    if (tempText.trim().length > 0) {
      setData([...data, { title: tempText.trim() }]);
      flatListRef.current.scrollToOffset({offset: 50, animated: true});
      setTempText("");
      return;
    }

    alert("Debes ingresar texto en el campo");
  };

  const deleteItem = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  const flatListRef = useRef(null);

  return (
    <View style={styles.listContainer}>
      <View style={styles.itemContainer}>
        <FlatList
          ref={flatListRef}
          data={data}
          contentContainerStyle={{ paddingBottom: 50, gap: 10 }}
          renderItem={({ item, index }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <BouncyCheckbox
                style={{
                  // marginBottom: 20,
                  flex: 1,
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "#0dbc79",
                }}
                size={25}
                fillColor="#3a5f93"
                unfillColor="#FFFFFF"
                text={item.title}
                isChecked={false}
                textStyle={{ color: "white", fontWeight: "bold" }}
                iconStyle={{ borderColor: "#3a5f93" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked) => {}}
              />
              <TouchableOpacity onPress={() => deleteItem(index)}>
                <Icon name="delete" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={tempText}
          onChangeText={(text) => setTempText(text)}
          style={[globalStyles.input]}
          placeholder="¿Que haras el dia de hoy?"
        />
        <TouchableOpacity onPress={addItem} style={styles.addButton}>
          <Text style={styles.addButton.innerText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ListView;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
  itemContainer: {
    maxWidth: "90%",
    width: "100%",
    gap: 20,
  },

  inputContainer: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    width: "100%",
    maxWidth: "95%",
    flexDirection: "row",
    gap: 5,
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#3a5f93",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    innerText: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold",
    },
  },
});
