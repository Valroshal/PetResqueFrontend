import * as React from 'react';
import {Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import ThreeDots from '../../../assets/images/ThreeDots.png';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: 97,
        backgroundColor: '#FFF4E2',
        borderRadius: 8,
        marginBottom: 10,
    } as ViewStyle,
    infoBox: {
        paddingTop: 24,
        paddingLeft: 16,
    } as ViewStyle,
    regularText: {
        fontFamily: 'Lato',
        fontSize: 16,
        fontWeight: '400',
    } as TextStyle,
});

interface Props {
    animalName: string;
    actionName: string;
    date:   string;
    address: string;
}

const ActivityCard: React.FC<Props> = ({animalName, actionName,date,address}) => {

    const openDetails = () => {
      console.log('openDetails')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                // position: "absolute",
                // top: 16,
                // right:8

            }}
                //TODO: do it
                onPress={openDetails}
            >
                <Image source={ThreeDots} />
            </TouchableOpacity>
            <View>
                <View style={styles.infoBox}>
                    <Text style={styles.regularText}>
                        {animalName + ', ' + actionName + ' on  ' + date}
                    </Text>
                </View>
                <View style={[styles.infoBox, {paddingTop: 17}]}>
                    <Text style={styles.regularText}>
                        {address}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ActivityCard;