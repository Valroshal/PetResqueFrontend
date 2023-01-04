import React from 'react';
import ThankScreen from "./src/containers/AddPetFirst/ThankScreen/ThankScreen";
import Login from "./src/containers/Login/Login";
import SignUp from "./src/containers/SignUp/SignUp";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
