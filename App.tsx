import React from 'react';
import ThankScreen from "./src/containers/AddPetFirst/ThankScreen/ThankScreen";
import Login from "./src/containers/Login/Login";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OnBoardingPageWrapper from "./src/containers/OnBoarding/OnBoardingPageWrapper";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ThankScreen" component={ThankScreen} />
          <Stack.Screen name="OnBoarding" component={OnBoardingPageWrapper} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
