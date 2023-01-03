import * as React from 'react';
import {Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import ThreeDots from '../../../assets/images/ThreeDots.png';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#FFF4E2',
        borderRadius: 8,
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

    const showMoreOptions = () => {
      console.log('openDetails')
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={{paddingTop: 24, paddingLeft: 16,}}>
                    <Text style={styles.regularText}>
                        {animalName + ', ' + actionName + ' on  ' + date}
                    </Text>
                </View>
                <View style={ {paddingTop: 17,
                    paddingLeft: 16,paddingBottom: 24}}>
                    <Text style={styles.regularText}>
                        {address}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    paddingTop: 10,
                    paddingRight:19
                }}
                onPress={showMoreOptions}
            >
                <Image source={ThreeDots} />
            </TouchableOpacity>
        </View>
    )
}

export default ActivityCard;