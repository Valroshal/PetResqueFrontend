import React from 'react';
import Login from "./src/containers/Login/Login";
import SignUp from "./src/containers/SignUp/SignUp";
import AddPetFirst from "./src/containers/AddPetFirst/AddPetFirst";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="AddPetFirst" component={AddPetFirst} />
              <Stack.Screen name="Login" component={Login} />
              {/*<Stack.Screen name="SignUp" component={SignUp} />*/}
            </Stack.Navigator>
          </NavigationContainer>
      </QueryClientProvider>
  );
};

export default App;
