import { View, Text, Animated, Image, Dimensions, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {SplashScreenAnimation} from '../../../core/WellcomePage/SplashScreenAnimation'
import { SplashScreenStyle } from '../../../assets/style/WellcomeScreen/style'
import WellcomePages from '../../pages/WellcomePages/WellcomePages'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FONTS, SIZES } from '../../../assets/theme'

const logo = require('../../../assets/img/LogoSTTM.png')

const SplashScreen = () => {
    const {...dataAnimation} = SplashScreenAnimation();

    useEffect(() => {
        return () => {
        }
    }, [])

    const styles = SplashScreenStyle({...dataAnimation})

    return (
        <Animated.View  style={styles.mainContainer}>
            <Animated.View style={styles.mainContent}>
                <Animated.View style={styles.headerContainer}>
                    <Animated.Image source={logo} style={styles.imageStyling}/>

                    <Animated.View style={styles.textHeadingContainer}>

                        <Animated.Text style={styles.headline}>
                            AKADEMI<Text style={styles.headline2}>MU </Text>
                        </Animated.Text>

                        <Animated.Text style={styles.subHeadline}>Aplikasi Sistem Informasi Akademik STTM Muhammadiyah Cileungsi</Animated.Text>
                    </Animated.View>
                </Animated.View>

                <Animated.View style={styles.contentContainer}>
                    <WellcomePages></WellcomePages>
                </Animated.View>
            </Animated.View>

        </Animated.View>
    )
}

export default SplashScreen