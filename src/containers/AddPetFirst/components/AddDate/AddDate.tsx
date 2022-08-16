import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";

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
        paddingBottom: 12,
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
  const x = () => {
      navigation.navigate('DatePicker')
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
          <TouchableOpacity style={styles.btn}>
              <Text style={{
                  padding: 10, fontSize: 16, fontFamily:'Lato' , color: '#6C6C6C'}}
              >
                  Pick a date and time (Required)*
              </Text>
          </TouchableOpacity>

          <View>

          </View>
      </View>
  )
}

export default AddDate;