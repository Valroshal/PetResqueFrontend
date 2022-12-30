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
    title:{
        //alignItems: "flex-start",
        justifyContent: "space-between",
        fontFamily: 'Concert One',
        color: '#FF6A3D',
        fontSize: 20,
        fontWeight: '400',
        //textAlign: 'center',
    } as TextStyle,
});


const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row" ,paddingLeft: 130 , paddingTop:8, paddingBottom:8 , paddingRight: 15}}>
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