import * as React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import Burger from "../../../assets/images/Burger.png";

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#FFDEA8',
    } as ViewStyle,
    title:{
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Concert One',
        color: '#FF6A3D',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    } as TextStyle,
});


const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {paddingTop: 18}]}>
                Rescue App
            </Text>

        </View>

    )

}

export default TopBar;