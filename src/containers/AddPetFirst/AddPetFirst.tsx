import * as React from 'react';
import {View} from "react-native";
import TopLogo from "../components/TopLogo/TopLogo";
import AddRemoveCard from "./components/AdddRemoveCard/AddRemoveCard";
import DateTimePicker from "../components/DateTimePicker/DateTimePicker";

interface Props{
    navigation: any
}

const AddPetFirst: React.FC<Props> = ({navigation}) => {
    const lostPet = () => {
        console.log("Clicked lost Pet");
        navigation.navigate('DateTimePicker')
    }
    const foundPet = () => {
        console.log("Clicked FOUND Pet");
        navigation.navigate('DateTimePicker')
    }

  return(
      <View style={{paddingHorizontal: 30, paddingTop: 46}}>
          <View style={{marginBottom: 52}}>
              <TopLogo/>
          </View>
          <View style={{marginBottom: 40}}>
                  <AddRemoveCard
                      upperText="Add lost pet"
                      lowerText="I`ve lost my pet and want to find it"
                      onPressCard= {lostPet}
                  />

          </View>

          <View>
                  <AddRemoveCard
                      upperText="Add found pet"
                      lowerText="I`ve found a pet and looking for it`s owners"
                      onPressCard={foundPet}
                  />
          </View>
      </View>
  )
}

export default AddPetFirst;