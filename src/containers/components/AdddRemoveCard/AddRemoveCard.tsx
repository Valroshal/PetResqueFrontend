import * as React from 'react';
import {StyleSheet, ViewStyle, TextStyle, Text, View} from 'react-native';
import {ReactComponent as Plus } from '../../../assets/svg/Plus.svg';


const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: 300,
        height: 194,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
        borderColor: 'gray',
    } as ViewStyle,
    container: {} as ViewStyle,
    upperText: {
        fontSize: 32,
        fontFamily: 'Lato',
        color: '#28230E',
        fontWeight: 'normal',
        textAlign: 'center',
    } as TextStyle,
    lowerText: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#595959',
        fontWeight: 'normal',
        justifyContent: 'center',
        textAlign: 'center',
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
                <View>
                    <Text style={styles.upperText}>{upperText}</Text>
                </View>
                <View style={{width: 150}}>
                    <Text style={styles.lowerText}>{lowerText}</Text>
                </View>
                <View>
                    <Plus />
                </View>
            </View>
        </View>
    );
};

export default AddRemoveCard;
