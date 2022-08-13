import React from 'react';
import type {Node} from 'react';
import Login from "./src/containers/Login/Login";
import {NavigationContainer} from "@react-navigation/native";


const App: () => Node = () => {

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    // <SafeAreaView>
    //   {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
    //   {/*<ScrollView*/}
    //   {/*  contentInsetAdjustmentBehavior="automatic"*/}
    //   {/*  style={backgroundStyle}>*/}
    //   {/*  /!*<Header />*!/*/}
    //   {/*  <View*/}
    //   {/*    style={{*/}
    //   {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
    //   {/*    }}>*/}
    //   {/*    <Section title="Step One">*/}
    //   {/*      Edit <Text style={styles.highlight}>App.js</Text> to change this*/}
    //   {/*      screen and then come back to see your edits.*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="See Your Changes">*/}
    //   {/*      <ReloadInstructions />*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="Debug">*/}
    //   {/*      <DebugInstructions />*/}
    //   {/*    </Section>*/}
    //   {/*    <Section title="Learn More">*/}
    //   {/*      Read the docs to discover what to do next:*/}
    //   {/*    </Section>*/}
    //   {/*    <LearnMoreLinks />*/}
    //   {/*  </View>*/}
    //   {/*</ScrollView>*/}
    //   <Login />
    // </SafeAreaView>

  );
};

export default App;
