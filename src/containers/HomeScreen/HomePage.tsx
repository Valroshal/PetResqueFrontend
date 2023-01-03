import * as React from 'react';
import {StyleSheet, Text, TextStyle, View} from "react-native";
import TopBar from "../components/TopBar/TopBar";
import { useState} from "react";
import ActivityCard from "./ActivityCard/ActivityCard";

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
});

const HomePage = () => {

    const [userName, setUserName] = useState<string>('Bob');

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <TopBar/>
            <View style={{paddingHorizontal: 16}}>
                <View style={{paddingTop: 34}}>
                    <Text style={styles.topText}>
                        {"Good Evening, " + userName + "!"}
                    </Text>
                </View>
                <View style={{paddingTop: 20}}>
                    <Text style={styles.topText}>
                        My activity
                    </Text>
                </View>
                <View style={{paddingTop: 26}}>
                    <Text style={[styles.cardTitles, {paddingBottom: 9, paddingLeft: 4}]}>
                        Added found pet
                    </Text>
                    <View>
                        <ActivityCard
                            animalName={'Cat'}
                            actionName={'found'}
                            date={'12/03/2022'}
                            address={'Johnson Road 12'}
                        />
                    </View>
                </View>
                <View style={{paddingTop: 29}}>
                    <Text style={[styles.cardTitles, {paddingBottom: 9, paddingLeft: 4}]}>
                        Added lost pet
                    </Text>
                    <View>
                        <ActivityCard
                            animalName={'Garfield'}
                            actionName={'lost'}
                            date={'12/10/2021'}
                            address={'Johnson Road 12'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomePage;