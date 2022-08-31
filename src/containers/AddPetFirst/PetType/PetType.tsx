import React, { useState } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import {StyleSheet, View, ViewStyle} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 30 ,
        alignItems: "flex-start",
    } as ViewStyle,

});

const radioButtonsData: RadioButtonProps[] = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Cat',
    value: 'option1'
}, {
    id: '2',
    label: 'Dog',
    value: 'option2'
}, {
    id: '3',
    label: 'Hamster',
    value: 'option3'
}, {
    id: '4',
    label: 'Guinea Pig',
    value: 'option4'
}, {
    id: '5',
    label: 'Parrot',
    value: 'option5'
}, {
    id: '6',
    label: 'Turtle',
    value: 'option6'
}]


interface Props {
    navigation: any;
    animalType: string;
}

const PetType: React.FC<Props> = ({navigation, animalType}) =>{
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData)

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
        console.log("radio ", radioButtons );
        navigation.navigate('AddpetLost');
    }

    return (
        <View style={styles.container}>
            <RadioGroup
                containerStyle={{alignItems: "flex-start"}}
                // size={16}
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
            />
        </View>
    );
};

export default PetType;

