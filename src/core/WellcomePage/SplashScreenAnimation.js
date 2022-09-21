import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'
import { SIZES } from '../../assets/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SplashScreenAnimation = () => {
    const edges = useSafeAreaInsets()

    const color = useRef(new Animated.Value(0)).current;
    const startAnimation = useRef(new Animated.Value(0)).current;
    const TextColorChange = useRef(new Animated.Value(1)).current;
    const opacityLogo = useRef(new Animated.Value(1)).current;
    const scaleText= useRef(new Animated.Value(1)).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const contentTransition = useRef(new Animated.Value(0)).current;

    setTimeout(() => {
        Animated.parallel([
            Animated.timing(
                startAnimation, {
                    toValue: -SIZES.height + (edges.top + 110),
                    useNativeDriver: false,
                    duration: 500,
                    delay: 500
                }
            ),
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
                        y: SIZES.height / 3//-(SIZES.height / 1.84) + SIZES.padding
                    }, useNativeDriver: false,
                    delay: 500
                }
            ),
            Animated.timing(
                contentTransition, {
                    toValue: 1,
                    useNativeDriver: false,
                    delay: 1250,
                    easing: Easing.in
                }
            )
        ]).start()
    }, 2000);

    return {color, moveTitle, scaleText, opacityLogo, TextColorChange, startAnimation, contentTransition}
}