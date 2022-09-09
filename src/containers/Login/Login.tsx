import * as React from 'react';
import * as yup from 'yup';
import {Image, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {Formik} from 'formik';
import TopLogo from "../components/TopLogo/TopLogo";
import GlobalButton from "../components/GlobalButton/GlobalButton";
import {Ex} from "../../assets/images/Ex.png";

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 46,
  } as ViewStyle,
  innerContainer: {
    padding : 20,
    paddingTop: 91,
  } as ViewStyle,
  header: {
    fontSize: 32,
    fontFamily: 'Lato',
    color: "#28230E",
    alignItems: "center",
  }  as TextStyle,
  subHeader: {
    fontSize: 16,
    fontStyle: "normal",
    color: "#28230E",
    fontFamily: 'Lato',
    fontWeight: "400",
  } as TextStyle,
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EC6868',
    marginBottom: 20,
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
    paddingTop: 6,
    paddingBottom: 26,
    alignItems: "flex-start",
    fontSize: 12,
    fontFamily:'Lato' ,
  } as TextStyle,
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});



const Login = () => {

  const loginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
    password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  })
  
  const handleSubmit = () => {
    
  }
  
  return (
    <View style={styles.container}>
      <TopLogo />
      <View style={styles.innerContainer}>
        <Text style={[styles.header , {paddingBottom: 15}]}>
            {'Log in'}
        </Text>
        <Text style={[styles.subHeader, {paddingBottom: 14}]}>
            {'Log in to search for your pet or connect to \n' +
            'other pet lovers and help them to find and\n' +
            'return pets to their home'}
        </Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              // isValid,
          }) => (
            <>
              <View
                style={(errors.email && touched.email) ? styles.fieldError : styles.field}
              >
                  <TextInput
                    placeholder="Email"
                    style={(errors.email && touched.email) ? [styles.inputTextError,{color: '#EC6868'}] :styles.inputText}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                {(errors.email && touched.email) &&
                  <Image
                    // style={}
                    source={Ex}
                  />
                }
              </View>
              {(errors.email && touched.email) &&
                <Text style={styles.errorText}>{errors.email}</Text>
              }
              <View
                style={(errors.password && touched.password) ? styles.fieldError :styles.field}
              >
                  <TextInput
                    placeholder="Password"
                    style={(errors.password && touched.password) ? [styles.inputTextError,{color: '#EC6868'}] : styles.inputText}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
              </View>
              {(errors.password && touched.password) &&
                <Text style={styles.errorText}>{errors.password}</Text>
              }
              <View style={{paddingVertical: 7}}>
                <Text
                  style={[styles.subHeader,{fontWeight: "700"}]}
                >
                  {'Forgot your password?'}
                </Text>
              </View>
              <View style={{paddingTop: 5}}>
                <GlobalButton
                  innerText={"Log in"}
                  innerTextColor={'#28230E'}
                  backGroundColor={'#FFDEA8'}
                  onPressButton={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  )
};

export default Login;
