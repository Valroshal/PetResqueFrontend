import * as React from 'react';
import {StyleSheet, Text, TextStyle, View} from "react-native";
import TopBar from "../components/TopBar/TopBar";

const styles = StyleSheet.create({
    topText: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '500',
    } as TextStyle,
    cardTitles: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 16,
    }

})

interface Props{
    username:  string
}

const HomePage: React.FC<Props> = (username) => {
    //TODO: Add Props with name of the user.
    const Greeting = (name: any) => {
        return (
            <View>
                <Text style={styles.topText}>
                    Good Evening, {name}!
                </Text>
            </View>
            )

    }

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
           <TopBar />
           <View style={{paddingHorizontal: 16}}>
               <View style={{paddingTop: 34}}>
                   <Greeting name={username} />
               </View>
               <View style={{paddingTop: 20}}>
                   <Text style={styles.topText}>
                       My activity
                   </Text>
               </View>
               <View style={{paddingTop: 26,paddingLeft:4}}>
                   <Text style={styles.cardTitles}>
                       Added found pet
                   </Text>
                   <View>

                   </View>
               </View>
               <View style={{paddingLeft:4, paddingTop: 29}}>
                   <Text style={styles.cardTitles}>
                       Added lost pet
                   </Text>
                   <View>

                   </View>
               </View>
           </View>
        </View>
    )
}

export default HomePage;