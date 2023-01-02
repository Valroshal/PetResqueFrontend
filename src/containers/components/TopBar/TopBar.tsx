import * as React from 'react';
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import Burger from '../../../assets/images/Burger.png';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 60,
        width: '100%',
        backgroundColor: '#FFDEA8',
    } as ViewStyle,
    innerContainer: {
        flexDirection: "row" ,
        justifyContent: "center",
        //alignItems: "center",
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 15,
        paddingLeft: 30,
    } as ViewStyle,
    title:{
        //justifyContent: "space-between",
        alignContent: "center",
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
                    <Text style={[styles.title, { paddingTop: 10}]}>
                        Rescue App
                    </Text>
                <View style={{paddingLeft: 71, height: 44 , width: 44}}>
                    <Image source={Burger} />
                </View>
            </View>
        </View>
    )
}

export default TopBar;