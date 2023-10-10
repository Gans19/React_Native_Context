import React from "react";
import { InputProvider } from "./InputContext";
import InputScreen from "./InputScreen";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <InputProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Input" component={InputScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </InputProvider>
  );
};

export default App;
