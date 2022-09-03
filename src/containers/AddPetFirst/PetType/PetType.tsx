import React, {useEffect, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {RADIO_BUTTONS_DATA} from "../../../consts/PetType";
import {StyleSheet, View, ViewStyle} from "react-native";
import * as R from 'ramda';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30 ,
        alignItems: "flex-start",
    } as ViewStyle,

});

interface Props {
    navigation: any;
}

const PetType: React.FC<Props> = ({navigation}) =>{
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(RADIO_BUTTONS_DATA)
    const [radioChoice, setRadioChoice] = useState<string>("")

    const onPressRadioButton = (radioButtonsArray: RadioButtonProps[]) => {
        setRadioButtons( radioButtonsArray );
        console.log("radioButtonsArray", radioButtonsArray);
        radioButtonsArray.find(button:any) => button.selected && button.selected == true)
        // R.find(R.propEq("selected", true))(radioButtonsArray);
        // for (let val of radioButtonsArray) {
        //     if (val.selected == true) {
        //         setRadioChoice( `${val.label}` )
        //     }
        // }
    }

    const navigationBack = () => {
             navigation.navigate( {
                name: 'AddPetLost',
                params: {post: radioChoice},
                merge: true,
            } );
    }
    useEffect(() => navigationBack,[radioChoice]);

    return (
        <View style={styles.container}>
            <RadioGroup
                containerStyle={{alignItems: "flex-start"}}
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
            />
        </View>
    );
};

export default PetType;

