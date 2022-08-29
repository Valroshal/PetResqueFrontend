import * as React from 'react';
import {StyleSheet, ViewStyle, TextStyle, Text, View, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import Plus from '../../../assets/images/plus.png';
import {useState} from "react";

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        paddingHorizontal: 50,
        paddingTop: 20,
        paddingBottom: 20,
    } as ViewStyle,
    cardPressed: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#000',
        backgroundColor : '#DDDDDD',
    } as ViewStyle,
    upperText: {
        fontSize: 32,
        fontFamily: 'Lato',
        color: '#28230E',
        fontWeight: 'normal',
        textAlign: 'left',
    } as TextStyle,

    lowerText: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#595959',
        maxWidth: 200 ,
        fontWeight: 'normal',
        textAlign: 'left',
    } as TextStyle,
});

interface Props{
    upperText: string
    lowerText: string
    onPressCard: Function
}


const AddRemoveCard: React.FC<Props> = ({upperText,lowerText, onPressCard}) => {
    const [isCardPressed, setIsCardPressed] = useState<boolean>(false)

    const handlePressCard = () => {
        setIsCardPressed(true)
        onPressCard();
    }

    return (
        <TouchableOpacity
            style={isCardPressed ? styles.cardPressed : styles.card}
            onPress={handlePressCard}
        >
            <View style={{marginBottom: 4}}>
                <Text style={styles.upperText}>{upperText}</Text>
            </View>
            <View style={{marginBottom: 16}}>
                <Text style={styles.lowerText}>{lowerText}</Text>
            </View>
            <View>
                <Image source={Plus} />
            </View>
        </TouchableOpacity>
    );
};

export default AddRemoveCard;
