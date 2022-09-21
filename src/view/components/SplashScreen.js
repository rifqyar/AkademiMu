import { View, Text, Animated, Image, Dimensions, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
    COLORS, FONTS, SIZES,
} from '../../assets/theme'
import { transform } from '@babel/core'
import {SplashScreenAnimation} from '../../core/SplashScreenAnimation'
import { SplashScreenStyle } from '../../assets/style/WellcomeScreen/style'

const logo = require('../../assets/img/LogoSTTM.png')

const SplashScreen = () => {
    const {color, moveTitle, opacityLogo, scaleText, TextColorChange} = SplashScreenAnimation();

    const changeColor = color.interpolate({
        inputRange: [ 0, 0.5, 1 ],
        outputRange: [ 'rgba(0, 191, 165, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const textChange = TextColorChange.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [ 'rgba(0, 191, 165, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const styles = SplashScreenStyle({changeColor, moveTitle, opacityLogo, scaleText, textChange})
    return (
        <Animated.View  style={styles.mainContainer}>
            <Animated.View style={styles.mainContent}>
                <Animated.Image source={logo} style={styles.imageStyling}/>

                <Animated.Text style={styles.headline}>
                    AKADEMI<Text style={styles.headline2}>MU </Text>
                </Animated.Text>
            </Animated.View>

        </Animated.View>
    )
}

export default SplashScreen