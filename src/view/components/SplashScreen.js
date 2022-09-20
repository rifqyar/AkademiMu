import { View, Text, Animated, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
    COLORS, FONTS, SIZES,
} from '../../assets/theme'
import { transform } from '@babel/core'

const logo = require('../../assets/img/LogoSTTM.png')

const SplashScreen = () => {

    const edges = useSafeAreaInsets();
    const color = useRef(new Animated.Value(0)).current;
    const [bgColor, setbgColor] = useState(COLORS.accentTeal)
    
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                // Animated.timing(
                //     color, {
                //         toValue: 1,
                //         useNativeDriver: true,
                //     }
                // )

                Animated.timing(
                    scaleLogo, {
                        toValue: 0.5,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,{
                        toValue: {
                            x: (SIZES.width / 2.5),
                            y: -(SIZES.height / 2.5)
                        }, useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,{
                        toValue: {
                            x: -(SIZES.width / 3.5),
                            y: -(SIZES.height / 1.8) + SIZES.padding
                        }, useNativeDriver: true
                    }
                )
            ]).start()

            setbgColor(COLORS.white)
        }, 500);

        return () => {
        }
    }, [])

    // const bgColor = color.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [COLORS.accentTeal, COLORS.white]
    // })

    return (
        <Animated.View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: COLORS.accentTeal
        }}
        >

            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Animated.Image source={logo} style={{
                    height: SIZES.width / 2.5,
                    width: SIZES.width / 2.5,
                    marginBottom: SIZES.padding,
                    transform: [
                        {translateX: moveLogo.x},
                        {translateY: moveLogo.y},
                        {scale: scaleLogo},
                    ]
                }}/>

                <Animated.Text style={{
                    ...FONTS.h4, 
                    fontWeight: 'bold', 
                    color: COLORS.white, 
                    transform: [
                        {translateX:moveTitle.x},
                        {translateY:moveTitle.y},
                    ]
                }}>
                    AKADEMI<Text style={{color: COLORS.accentYellow}}>MU </Text>
                </Animated.Text>
            </Animated.View>

        </Animated.View>
    )
}

export default SplashScreen