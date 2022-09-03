import * as React from 'react';
import {
  Alert,
  Image, ScrollView,
  StyleSheet,
  Text, TextInput, TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useCallback, useEffect, useState} from "react";
import {PetPhotoType} from "../../../types/PetType";
import Camera from "../../../assets/images/camera.png";
import Vector from "../../../assets/images/Vector.png";

const ImagePicker = require('react-native-image-picker');


const styles = StyleSheet.create({
  subTitleText: {
    fontSize: 16,
    fontFamily: 'Lato',
  } as TextStyle,
  titleText: {
    fontSize: 20,
    fontFamily: 'Lato',
  } as TextStyle,
  container: {
    justifyContent: 'flex-start',
    marginBottom: 40,
  } as ViewStyle,
  title: {
    justifyContent: 'flex-start',
    paddingBottom: 12,
  } as ViewStyle,
  smallText: {
    justifyContent: 'flex-start',
    paddingRight: 70,
    paddingBottom: 15,
  } as ViewStyle,
  btn: {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: 'white' ,
    shadowColor: 'black',
    shadowOffset: {width: 6, height: 6},
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 1,
  } as ViewStyle,
  btnPhoto: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#28230E',
    width: 157 ,
  } as ViewStyle,
  photoGrid: {
    display: 'flex',
    maxWidth: 350,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  } as ViewStyle,
});

interface Props {
  navigation: any;
  route: any;
}

const AddPetLost: React.FC<Props> = ({navigation, route }) => {
  const [photos , setPhotos] = useState<PetPhotoType[]>([])
  const [animalType , setAnimalType] = useState<string>("Please choose type")

  useEffect(() =>
      {route.params?.post ? setAnimalType(route.params?.post) : null},
      [route.params?.post]
  );

  const addPetType = () => {
    navigation.navigate('PetType');
  };

  //comment
  const handleChoosePhoto = useCallback(() => {
    let options = {
      selectionLimit: 0,
    };
    ImagePicker.launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        Alert.alert('You did not select any image');
      }
      else {
        setPhotos((photos) => [...photos,...response.assets]);
      }
    });
  },[]);

  return (
    <ScrollView
        contentContainerStyle={{ backgroundColor:'white' , flexGrow: 1 }}
    >
      <View style={{padding: 20}}>
          <View style={styles.smallText}>
            <Text style={[styles.subTitleText, {color: '#28230E'}]}>
              Here are details of your dog - ֿMars. You can edit it here
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={[styles.titleText , { color: '#000'}]}>
                Animal Type
              </Text>
            </View>
              <TouchableOpacity style={styles.btn} onPress={addPetType}>
                <Text style={[styles.subTitleText ,{padding: 13.5, color: '#6C6C6C'}]}>
                  {animalType}
                </Text>
                <Image
                    source={Vector}
                    style={{marginHorizontal: 10 , marginVertical : 13.34}}
                />
              </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={[styles.titleText,{ color: '#000'}]}>
                Add Photos
              </Text>
            </View>
            <View style={styles.photoGrid}>
              {photos && photos.map( (item,index) => {
                return (
                  <View key={index}>
                        <Image
                            source={{uri: item.uri}}
                            style={{width: 96, height: 96, marginBottom: 12 , marginRight: 12 }}
                        />

                  </View>
                )
                })}
            </View>
              <TouchableOpacity
                  style={styles.btnPhoto}
                  onPress={handleChoosePhoto}
              >
                <Image
                    source={Camera}
                />
                <Text style={{fontSize: 20, fontFamily: 'Lato', color: '#28230E'}}>
                  Add Photos
                </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.container} >
            <View style={styles.title}>
              <Text style={[styles.titleText , {color: '#000'}]}>
                Description
              </Text>
            </View>
            <View style={styles.smallText}>
              <Text style={[styles.subTitleText, {color: '#595959'}]}>
                Here you can describe color, size, breed of the pet
              </Text>
            </View>
            <View style={styles.btn}>
              <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholderTextColor='#28230E'
                  placeholder="Shy and fluffy, retriever"
                  style={{
                    padding: 10,
                    fontSize: 16
                  }}
              >
              </TextInput>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

export default AddPetLost;
