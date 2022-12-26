import * as React from 'react';
import {StyleSheet, ViewStyle, Text, TouchableOpacity, Image, View} from 'react-native';
import facebookIcon from '../../../assets/images/facebookIcon.png'
import googleIcon from '../../../assets/images/googleIcon.png'

const styles = StyleSheet.create({
    defaultContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        width:320,
        borderRadius: 8,
        marginTop:18,
        marginLeft:21
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
            <View style={{paddingRight: 12}}>
                <Image style= {{width: 12, height: 24}} source={facebookIcon} />
            </View>
            <Text style={{color: innerTextColor, fontFamily: 'Lato', fontSize: 16}}>
                {innerText}
            </Text>
            
        </TouchableOpacity>

    );
};

export default GlobalButton;


