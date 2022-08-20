import React from 'react';
import Login from "./src/containers/Login/Login";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AddPetLost from "./src/containers/AddPetFirst/AddPetLost/AddPetLost";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
          <Stack.Screen name="AddpetLost" component={AddPetLost} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;