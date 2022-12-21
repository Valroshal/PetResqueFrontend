import * as React from 'react';
import {StyleSheet, ViewStyle, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    defaultContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        borderRadius: 8
    } as ViewStyle
});


interface Props{
    innerText: string
    innerTextColor: string
    backGroundColor: string
    borderColor?: string
    onPressButton: any
}


const GlobalButton: React.FC<Props>  = ({
                                            innerText,
                                            innerTextColor,
                                            backGroundColor,
                                            borderColor ,
                                            onPressButton
}) => {

    return (
        <TouchableOpacity
            style={[ styles.defaultContainer ,{backgroundColor: backGroundColor},
                !borderColor ? null : {borderColor: borderColor, borderWidth: 1} ]}
            onPress={onPressButton}
        >
            <Text style={{color: innerTextColor, fontFamily: 'Lato', fontSize: 16}}>
                {innerText}
            </Text>
        </TouchableOpacity>

    );
};

export default GlobalButton;


