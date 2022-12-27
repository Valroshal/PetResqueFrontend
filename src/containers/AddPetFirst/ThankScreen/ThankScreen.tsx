import * as React from 'react';
import Cat from "../../../assets/images/Cat.png";
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingVertical: 48,
        paddingTop: 211,
        alignItems:'center',
    } as ViewStyle,
    text: {
        fontSize: 36,
        fontFamily: 'Lato',
        color: '#000',
    } as TextStyle,
});

const ThankScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {alignItems:'center'}]}>
                Thank You
            </Text>
            <Text style={[styles.text, {alignItems:'center', paddingBottom: 45}]}>
                for adding a pet!
            </Text>
            <Image
                source={Cat}
            />
        </View>
    )
}

export default ThankScreen;