import React from 'react';
import Login from "./src/containers/Login/Login";
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
            </Stack.Navigator>
          </NavigationContainer>
      </QueryClientProvider>
  );
};

export default App;
