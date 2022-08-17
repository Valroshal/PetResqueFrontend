import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import DatePicker from "react-native-date-picker";
import DateTimePicker from "../../../components/DateTimePicker/DateTimePicker";
import {useState} from "react";

const styles = StyleSheet.create({
    title: {
        // display: 'flex',
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        // padding: 20,
        paddingBottom: 8,
    } as ViewStyle,
    subtitle: {
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        // paddingBottom: 12,
        paddingRight: 70,
    } as ViewStyle,
    btn: {
        margin: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#595959',
    }
})

interface Props{
    navigation: any
}


const AddDate: React.FC<Props> = ({navigation}) => {
    const [isOpen, setIsOpen] = useState(false)

    const addDateTime = () => {
        console.log("Clicked Add Date" , isOpen);
        setIsOpen(true);
    }
    const changeOpenStatus = () => {
        setIsOpen(!isOpen)
    }

    return(
      <View >
          <View style={styles.title}>
              <Text style={{fontSize: 20, fontFamily:'Lato' , color: '#000'}}>
                Date and time
              </Text>
          </View>
          <View style={styles.subtitle}>
              <Text style={{fontSize: 16, fontFamily:'Lato' , color: '#595959'}}>
                  Please pick the date you've last seen the pet
              </Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={addDateTime}>
              <Text style={{
                  padding: 10, fontSize: 16, fontFamily:'Lato' , color: '#6C6C6C'}}
              >
                  Pick a date and time (Required)*
              </Text>

          </TouchableOpacity>

          {isOpen && <DateTimePicker openStatus={isOpen} handlerOpenStatus={changeOpenStatus}/>}

      </View>
  )
}

export default AddDate;