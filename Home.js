import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import { InputContext } from "./InputContext";

const Home = () => {
  const { inputs, removeInput } = useContext(InputContext);

  return (
    <View>
      <FlatList
        style={styles.todoList}
        data={inputs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.inputsItem}>
            {/* <Text>{item.id}</Text> */}
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => removeInput(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  todoList: {
    marginTop: 10,
  },
  inputsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
