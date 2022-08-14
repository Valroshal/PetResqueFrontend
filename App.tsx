import React from 'react';
import Login from "./src/containers/Login/Login";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
