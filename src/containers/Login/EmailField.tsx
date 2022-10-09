import * as React from 'react';
import Ex from "../../assets/images/Ex.png";
import {Image, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle} from "react-native";
import {useFormik} from "formik";
import * as yup from "yup";
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
		color: '#6C6C6C',
	} as TextStyle,
	inputTextError: {
		padding: 10,
		paddingTop: 13.5,
		paddingBottom: 13.5,
		alignItems: "flex-start",
		fontSize: 16,
		color: '#EC6868',
		fontFamily:'Lato' ,
	} as TextStyle,
	errorText: {
		fontSize: 12,
		color: '#BA0000',
	} as TextStyle,
})

const EmailField = () => {
	const {setFieldValue, values, errors, touched } = useFormik<{
		email: string;
	}>({
		initialValues: {
			email: '',
		},
		onSubmit: (): void => {},
		validationSchema: yup.object().shape({
			email: yup
			.string()
			.email("Please enter valid email address - yourname@domain.com")
			.required('Please enter your email'),
		}),
	});
	
	useEffect(() =>
		{
		console.log("email comp." + values.email)}
	);
	
	// const handleChange =  (val: string)=> {
	// 	setFieldValue('email', val);
	// 	console.log("email- print: " + val);
	//
	// };
	
	return (
		<View >
			<View
				style={(errors.email && touched.email) ? styles.fieldError : styles.field}
			>
				<TextInput
					placeholder="Email"
					style={(errors.email && touched.email) ? [styles.inputTextError,{color: '#EC6868'}] : styles.inputText}
					value={values.email}
					onChangeText={(val) => setFieldValue('email', val)}
					keyboardType="email-address"
				/>
				{(errors.email && touched.email) && (
					<View>
						<Image
							source={Ex}
							style={{width: 20, height:20,marginHorizontal: 18 , marginVertical : 14}}
						/>
					</View>
				)
				}
				
			</View>
			{(errors.email && touched.email) && (
          <View style={{paddingBottom: 20}}>
						<Text style={styles.errorText}>
							{errors.email}
						</Text>
					</View>
			)
			}
		</View>
	)
};


export default EmailField;



