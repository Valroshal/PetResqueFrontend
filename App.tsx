import React from 'react';
import Login from "./src/containers/Login/Login";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DateTimePicker from "./src/containers/components/DateTimePicker/DateTimePicker";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
          <Stack.Screen name="DateTimePicker" component={DateTimePicker} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
