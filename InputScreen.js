import React, { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { InputContext } from "./InputContext";

const InputScreen = ({ navigation }) => {
  const { addInput } = useContext(InputContext);
  const [inputText, setInputText] = useState("");
  const handleAddInput = () => {
    if (inputText) {
      addInput({ id: Math.floor(Math.random() * 100), text: inputText });
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new input"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Add Input" onPress={handleAddInput} />

      <Button title="Next Page" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    // width: "50%",
    alignItems: "center",
    gap: 40,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "50%",
    alignItems: "center",
  },
});

export default InputScreen;
