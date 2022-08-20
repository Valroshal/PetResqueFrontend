import * as React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import ImagePicker, { ImageLibraryOptions } from 'react-native-image-picker';



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
    btnPhoto:{
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#28230E',
    } as ViewStyle,
    imageStyle: {

    }
})

interface Props{
    navigation: any
    name : string
}


const AddPetLost: React.FC<Props> = ({name, navigation}) => {


    const addPetType = () => {
        navigation.navigate('AddPetFirst')
    }

    // state = {
    //     photo: null
    // };

    const handleChoosePhoto = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        ImagePicker.launchImageLibrary( options, response => {
            console.log("response", response)
        })
    };

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
                <TouchableOpacity style={styles.btnPhoto} onPress={handleChoosePhoto}>
                    {/*<Image style={styles.imageStyle}*/}
                    {/*       source={require('/src/assets/images/camera.png')} />*/}
                    <Text style={{fontSize: 20, fontFamily:'Lato', color: '#28230E'}}>
                        Add Photos
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={{fontSize: 20, fontFamily:'Lato' , color: '#000'}}>
                    Description
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 16, fontFamily:'Lato' , color: '#595959'}}>
                    Here you can describe color, size, breed of the pet
                </Text>
            </View>
        </View>
    )
}

export default AddPetLost;