import * as React from 'react';
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import Burger from "../../../assets/images/Burger.png";

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#FFDEA8',
        display: "flex",
    } as ViewStyle,
    innerContainer: {
        flexDirection: "row" ,
        justifyContent: "space-between",
        paddingLeft: 130,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 15,
    } as ViewStyle,
    title:{
        justifyContent: "space-between",
        fontFamily: 'Concert One',
        color: '#FF6A3D',
        fontSize: 20,
        fontWeight: '400',
    } as TextStyle,
});


const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={[styles.title, {paddingTop: 10}]}>
                    Rescue App
                </Text>
                <View style={{alignContent: "space-between"}}>
                    <Image
                        source={Burger}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopBar;