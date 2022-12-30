import * as React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 97,
        width: '100%',
        backgroundColor: '#FFF4E2',
        display: "flex",
        borderRadius: 8,
    } as ViewStyle,
    // innerContainer: {
    //     flexDirection: "row" ,
    //     justifyContent: "space-between",
    //     paddingLeft: 130,
    //     paddingTop: 8,
    //     paddingBottom: 8,
    //     paddingRight: 15,
    // } as ViewStyle,
    // title:{
    //     justifyContent: "space-between",
    //     fontFamily: 'Concert One',
    //     color: '#FF6A3D',
    //     fontSize: 20,
    //     fontWeight: '400',
    // } as TextStyle,
});


const ActivityCard = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default ActivityCard;