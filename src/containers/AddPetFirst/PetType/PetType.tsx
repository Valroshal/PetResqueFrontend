import React, {useCallback, useEffect, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {RADIO_BUTTONS_DATA} from "../../../consts/PetType";
import {StyleSheet, View, ViewStyle} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    const onPressRadioButton = useCallback((radioButtonsArray: RadioButtonProps[]) => {
        setRadioButtons( radioButtonsArray );
        let choice = radioButtonsArray.find((button:any) => button.selected && button.selected == true);
        if(!choice) throw new Error("Expected a radio button to be selected")
        setRadioChoice(`${choice.label}`)
    },[]);

    const navigationBack = useCallback(() => {
             navigation.navigate( {
                name: 'AddPetLost',
                params: {post: radioChoice},
                merge: true,
            } );
    },[radioChoice]);

    useEffect(() =>
        navigationBack,[radioChoice]
    );

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

