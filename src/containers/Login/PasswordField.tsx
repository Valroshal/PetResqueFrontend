import * as React from 'react';
import Ex from "../../assets/images/Ex.png";
import {Image, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle} from "react-native";
import {useFormikContext} from "formik";
import {useEffect} from "react";

const styles = StyleSheet.create({
	container: {
		flex : 1,
	} as ViewStyle ,
	field: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: 'rgba(141, 141, 141, 0.15)',
		marginBottom: 20,
		shadowColor: '#000',
		backgroundColor: "white" ,
		shadowOffset: {width: 6, height: 6},
		shadowRadius: 10,
		shadowOpacity: 0.15,
		elevation: 1,
	} as ViewStyle,
	fieldError: {
		flexDirection: 'row',
		justifyContent: "space-between",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#EC6868',
		shadowColor: '#000',
		backgroundColor: "#FFE8E8" ,
		shadowOffset: {width: 6, height: 6},
		shadowRadius: 10,
		shadowOpacity: 0.15,
		elevation: 1,
	} as ViewStyle,
	inputText: {
		padding: 10,
		paddingVertical:13.5,
		alignItems: "flex-start",
		fontSize: 16,
		fontFamily:'Lato' ,
		color: '#28230E',
} as TextStyle,
	inputTextError: {
		padding: 10,
		paddingTop: 13.5,
		paddingBottom: 13.5,
		alignItems: "flex-start",
		fontSize: 20,
		color: '#28230E',
		fontFamily:'Lato' ,
	} as TextStyle,
	errorText: {
		fontSize: 10,
		color: '#BA0000',
	} as TextStyle,
})


const PasswordField = () => {
	const { setFieldValue, values, errors, touched } = useFormikContext<any>();
	
	useEffect(() => {
		console.log( "password comp.",values.password )
		console.log( "error password comp.:", (errors.password) )
	},[values.password,errors.password]);

	return (
		<View>
			<View
				style={(errors.password && touched.password) ? styles.fieldError :styles.field}
			>
				<TextInput
					placeholder="Password"
					style={(errors.password && touched.password) ? [styles.inputTextError] : styles.inputText}
					onChangeText={(values) => setFieldValue('password',values)}
					value={values.password}
					secureTextEntry
				/>
				{(errors.password && touched.password) && (
					<View>
						<Image
							source={Ex}
							style={{width: 20, height:20,marginHorizontal: 18 , marginVertical : 14}}
						/>
					</View>
				)
				}
			</View>
			{(errors.password && touched.password) && (
				<View style={{paddingBottom: 20}}>
          <Text style={styles.errorText}>
						errors.password
					</Text>
				</View>
			)
			}
		</View>
	)
};


export default PasswordField;
