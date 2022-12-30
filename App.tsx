import React from 'react';
import ThankScreen from "./src/containers/AddPetFirst/ThankScreen/ThankScreen";
import Login from "./src/containers/Login/Login";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TopBar from "./src/containers/components/TopBar/TopBar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ThankScreen" component={ThankScreen} />
          <Stack.Screen name="TopBar" component={TopBar} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
