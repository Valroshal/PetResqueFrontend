import * as React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text, TextInput, TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useState} from "react";
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  } as ViewStyle,
  btnPhoto: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#28230E',
    width: 157 ,
  } as ViewStyle,
});

interface Props {
  navigation: any;
}

const AddPetLost: React.FC<Props> = ({navigation}) => {
  const [photos , setPhotos] = useState([])

  const addPetType = () => {
    navigation.navigate('AddPetFirst');
  };

  const handleChoosePhoto = () => {
    let options = {
      selectionLimit: 0
    };
    ImagePicker.launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        Alert.alert('You did not select any image');
      }
      else {
        setPhotos(response.assets);
      }
    });
  };



  return (
    <View style={{paddingHorizontal: 20}}>
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
              Please choose type
            </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={[styles.titleText,{ color: '#000'}]}>
            Add Photos
          </Text>
        </View>
          {photos && photos.map( (item) => {
            return (
                <View>
                  <Image
                      source={{uri: item['uri']}}
                      style={{width: 96, height: 96}}
                  />
                </View>
              )
            })
          }
          <TouchableOpacity style={styles.btnPhoto} onPress={handleChoosePhoto}>
            {/*<Image style={styles.imageStyle}*/}
            {/*       source={require('/src/assets/images/camera.png')} />*/}
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
          <TextInput placeholderTextColor='#28230E'
                     placeholder="Shy and fluffy, retriever"
                     style={{padding: 10, paddingBottom: 150, fontSize: 16}}
          >
          </TextInput>
        </View>
      </View>
    </View>
  );
};

export default AddPetLost;
