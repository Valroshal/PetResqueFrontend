import * as React from 'react';
import ThankScreen from "./src/containers/AddPetFirst/ThankScreen/ThankScreen";
import Login from "./src/containers/Login/Login";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomePage from "./src/containers/HomeScreen/HomePage";
import ActivityCard from "./src/containers/HomeScreen/ActivityCard/ActivityCard";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ThankScreen" component={ThankScreen} />
            <Stack.Screen name="ActivityCard" component={ActivityCard} />
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
