import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'
import { SIZES } from '../assets/theme';

export const SplashScreenAnimation = () => {
    const color = useRef(new Animated.Value(0)).current;
    const TextColorChange = useRef(new Animated.Value(1)).current;
    const opacityLogo = useRef(new Animated.Value(1)).current;
    const scaleText= useRef(new Animated.Value(1)).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    setTimeout(() => {
        Animated.parallel([
            Animated.timing(
                color, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                    easing: Easing.ease
                }
            ),
            Animated.timing(
                TextColorChange, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                    easing: Easing.ease
                }
            ),
            Animated.timing(
                opacityLogo, {
                    toValue: 0,
                    useNativeDriver: false,
                    duration: 500,
                    easing: Easing.ease
                }
            ),
            Animated.timing(
                scaleText, {
                    toValue: 1.5,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                moveTitle,{
                    toValue: {
                        x: 0,
                        y: -(SIZES.height / 1.84) + SIZES.padding
                    }, useNativeDriver: false,
                    delay: 500
                }
            )
        ]).start()
    }, 2000);

    return {color, moveTitle, scaleText, opacityLogo, TextColorChange}
}