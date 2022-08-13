import * as React from 'react';
import {View} from "react-native";
import TopLogo from "../components/TopLogo/TopLogo";
import AddRemoveCard from "../components/AdddRemoveCard/AddRemoveCard";

const AddPetFirst = () => {
  return(
      <View style={{paddingHorizontal: 30, paddingTop: 46}}>
          <View style={{marginBottom: 52}}>
              <TopLogo/>
          </View>
          <View style={{marginBottom: 40}}>
              <AddRemoveCard
                  upperText="Add lost pet"
                  lowerText="I`ve lost my pet and want to find it"
              />
          </View>
          <View>
              <AddRemoveCard
                  upperText="Add found pet"
                  lowerText="I`ve found a pet and looking for it`s owners"
              />
          </View>
      </View>
  )
}

export default AddPetFirst;