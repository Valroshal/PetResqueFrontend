import * as React from 'react';
import {StyleSheet, View, ViewStyle} from "react-native";
import Swiper from 'react-native-swiper'
import OnBoardingPage from './OnBoardingPage';

const styles = StyleSheet.create({
        wrapper: {
            justifyContent: "center",
            backgroundColor: '#FFDEA8',
            height: '100%',
        } as ViewStyle,
        slide1: {
            flex: 1,
            backgroundColor: '#FFDEA8',
            paddingTop: 46,
        } as ViewStyle,
        slide2: {
            flex: 1,
            backgroundColor: '#FFDEA8',
            paddingTop: 46,
        } as ViewStyle,
        slide3: {
            flex: 1,
            backgroundColor: '#FFDEA8',
            paddingTop: 46,
        } as ViewStyle,
        dot: {
            borderColor: '#28230E',
            width: 15,
            height: 15,
            borderRadius: 7,
            borderWidth: 2,
            marginLeft: 10,
            marginRight: 10,
        } as ViewStyle,
        activeDot: {
            backgroundColor: '#28230E',
            width: 30,
            height: 15,
            borderRadius: 7,
            marginLeft: 10,
            marginRight: 10,
        } as ViewStyle,
    }
);


const OnBoardingPageWrapper = () => {

    return(
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            autoplay
            showsPagination={true}
            dot={ <View style={styles.dot}/> }
            activeDot={ <View style={styles.activeDot}/> }
            paginationStyle={{
                bottom: 217
            }}
            // loop={false}
        >
            <View style={styles.slide1}>
                <OnBoardingPage
                    slideText={"Find your pet, using our map"}
                />
            </View>
            <View style={styles.slide2}>
                <OnBoardingPage
                    slideText={"If you`ve found a lost pet,\n" +
                    "you can find it`s owner and save it"}
                />
            </View>
            <View style={styles.slide3}>
                <OnBoardingPage
                    slideText={ "If you`ve lost the pet, our friendly \n" +
                        " community will help to return it back home!" }
                />
            </View>
        </Swiper>
    )



}

export default OnBoardingPageWrapper;