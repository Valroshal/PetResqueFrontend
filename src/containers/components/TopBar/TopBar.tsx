import * as React from 'react';
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import Burger from '../../../assets/images/Burger.png';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row" ,
        backgroundColor: '#FFDEA8',
        justifyContent: "center",
    } as ViewStyle,
    image: {
        position: 'absolute',
        right: 15,
        top: 10,
        height: 44 ,
        width: 44
    } as ViewStyle,
    title:{
        fontFamily: 'Concert One',
        color: '#FF6A3D',
        fontSize: 20,
        fontWeight: '400',
    } as TextStyle,
});


const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { paddingTop: 18, paddingBottom: 22 }]}>
                Rescue App
            </Text>
            <View style={styles.image}>
                <Image source={Burger} />
            </View>
        </View>
    )
}

export default TopBar;