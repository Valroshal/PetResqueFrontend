import * as React from 'react';
import {StyleSheet, Text, TextStyle, View} from "react-native";
import TopLogo from "../components/TopLogo/TopLogo";

const styles = StyleSheet.create({
    middleText: {
        alignItems: "center",
        textAlign: "center",
        fontSize: 16,
        fontStyle: 'normal',
        color: '#28230E',
        fontFamily: 'Lato',
        fontWeight: '400',
    } as TextStyle,
});

interface Props{
    slideText: string;
}

const OnBoardingPage: React.FC<Props> = ({slideText}) => {

    return (
        <View>
            <View >
                <TopLogo />
            </View>
            <View style={{paddingTop: 156, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.middleText}>
                    {slideText}
                </Text>
            </View>
        </View>
    )
}
export default OnBoardingPage;