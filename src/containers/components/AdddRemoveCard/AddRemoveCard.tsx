import * as React from 'react';
import {StyleSheet, ViewStyle, TextStyle, Text, View} from 'react-native';
import Plus from '../../../assets/svg/plus.svg';

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
    } as ViewStyle,
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: "flex-start",
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
            <View style={styles.container}>
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
        </View>
    );
};

export default AddRemoveCard;
