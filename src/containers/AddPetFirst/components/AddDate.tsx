import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";


const AddDate = () => {
  return(
      <View>
          <Text>
            Date and time
          </Text>
          <Text>
              Please pick the date you've last seen the pet
          </Text>
          <TouchableOpacity>
              <Text>Add Location (Required)*</Text>
          </TouchableOpacity>

      </View>
  )
}

export default AddDate;