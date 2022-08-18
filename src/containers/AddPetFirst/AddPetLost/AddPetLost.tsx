import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";


const styles = StyleSheet.create({
    title: {
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingBottom: 12,
    } as ViewStyle,
    smallText: {
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingRight: 50,
        paddingBottom: 15,
    } as ViewStyle,
    btn: {
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    } as ViewStyle,
})

interface Props{
    navigation: any
    name : string
}


const AddPetLost: React.FC<Props> = ({name, navigation}) => {


    const addPetType = () => {
        navigation.navigate('AddPetFirst')
    }

    return (
        <View>
            <View style={styles.smallText}>
                <Text style={{fontSize: 16, fontFamily:'Lato' , color: '#28230E'}}>
                    Here are details of your dog - ֿMars. You can edit it here
                </Text>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize: 20, fontFamily:'Lato' , color: '#000'}}>
                    Animal Type
                </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={addPetType}>
                <Text style={{ padding: 13.5, fontSize: 16, fontFamily:'Lato' , color: '#6C6C6C'}} >
                    Please choose type
                </Text>
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={{fontSize: 20, fontFamily:'Lato' , color: '#000'}}>
                    Add Photos
                </Text>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize: 20, fontFamily:'Lato' , color: '#000'}}>
                    Description
                </Text>
            </View>

        </View>
    )
}

export default AddPetLost;