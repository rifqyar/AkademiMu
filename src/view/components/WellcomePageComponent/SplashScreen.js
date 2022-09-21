import { View, Text, Animated, Image, Dimensions, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {SplashScreenAnimation} from '../../../core/WellcomePage/SplashScreenAnimation'
import { SplashScreenStyle } from '../../../assets/style/WellcomeScreen/style'
import WellcomePages from '../../pages/WellcomePages/WellcomePages'

const logo = require('../../../assets/img/LogoSTTM.png')

const SplashScreen = () => {
    const {...dataAnimation} = SplashScreenAnimation();

    // useEffect(() => {
    //     console.log('awn')

    //     return () => {
    //     }
    // }, [])

    const changeColor = dataAnimation.color.interpolate({
        inputRange: [ 0, 0.5, 1 ],
        outputRange: [ 'rgba(0, 191, 165, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const textChange = dataAnimation.TextColorChange.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [ 'rgba(0, 191, 165, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const styles = SplashScreenStyle({...dataAnimation, changeColor, textChange})
    return (
        <Animated.View  style={styles.mainContainer}>
            <Animated.View style={styles.mainContent}>
                <Animated.View style={styles.headerContainer}>
                    <Animated.Image source={logo} style={styles.imageStyling}/>

                    <Animated.Text style={styles.headline}>
                        AKADEMI<Text style={styles.headline2}>MU </Text>
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={styles.contentContainer}>
                    <WellcomePages></WellcomePages>
                </Animated.View>
            </Animated.View>

        </Animated.View>
    )
}

export default SplashScreen