import * as React from 'react';
import {StyleSheet, ViewStyle, TextStyle, Text, View} from 'react-native';
import Plus from '../../../assets/svg/plus.svg';

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
        fontWeight: 'normal',
        textAlign: 'left',
    } as TextStyle,
});

interface Props{
    upperText: string
    lowerText: string
}


const AddRemoveCard: React.FC<Props> = ({upperText,lowerText}) => {
    return (
        <View style={styles.card}>
            <View style={{marginBottom: 4}}>
                <Text style={styles.upperText}>{upperText}</Text>
            </View>
            <View style={{marginBottom: 16}}>
                <Text style={styles.lowerText}>{lowerText}</Text>
            </View>
            <View>
                {/*<Plus width={50} height={50} />*/}
            </View>
        </View>
    );
};

export default AddRemoveCard;
