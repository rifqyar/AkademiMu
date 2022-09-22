import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../theme'

const SplashScreenStyle = ({...props}) => {
    const changeColor = props.color.interpolate({
        inputRange: [ 0, 0.5, 1 ],
        outputRange: [ 'rgba(0, 191, 165, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const textChange = props.TextColorChange.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [ 'rgba(0, 0, 0, 1)', 'rgba(0, 191, 165, 0.5)', 'rgba(255, 255, 255, 1)' ]
    })

    const changeFlex = props.changeFlexHeader.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.35]
    })

    const changeFlexContent = props.changeFlexHeader.interpolate({
        inputRange: [0,1],
        outputRange: [0, 1]
    })

    const {moveTitle, opacityLogo, scaleText, contentTransition} = props
    return StyleSheet.create({
        mainContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: changeColor,
        },
        mainContent: {
            flex: 1,
        },
        headerContainer: {
            flex: changeFlex,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: COLORS.Grey,
        },  
        imageStyling: {
            height: SIZES.width / 2.5,
            width: SIZES.width / 2.5,
            marginBottom: SIZES.padding,
            opacity: opacityLogo
        },
        textHeadingContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transform: [
                {translateX:moveTitle.x},
                {translateY:moveTitle.y},
            ],
        },
        headline: {
            ...FONTS.h4, 
            fontWeight: 'bold',
            transform: [
                {scale: scaleText},
            ],
            color: textChange
        },
        headline2: {
            color: COLORS.darkAmber
        },
        subHeadline: {
            ...FONTS.body4, 
            textAlign: 'center', 
            paddingTop: SIZES.padding,
            opacity: contentTransition,
        },
        contentContainer:{
            flex: changeFlexContent,
            opacity: contentTransition,
            marginTop: -SIZES.padding * 2
        }
    })
}

const mainContentStyle = () => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1
        },
        sectionImageContainer: {
            flex: 0.9
        },
        imageContainer: {
            flex: 0.9
        },
        captionContainer: {
            alignItems: 'center', 
            flex: 0.4, 
            marginHorizontal: SIZES.padding * 7
        },
        captionText: {
            ...FONTS.h2, 
            fontWeight: 'bold'
        },
        subheadingText: {
            textAlign: 'center'
        },
        subheadingInnerText: {
            ...FONTS.h4, 
            fontWeight: 'bold'
        },
        subheadingInnerText2: {
            color: COLORS.darkAmber
        },
        sectionFooterContainer: {
            marginTop: SIZES.padding * 3,justifyContent: 'center'
        },
        buttonContainer: {
            marginHorizontal: SIZES.padding3 * 3
        },
        button: {
            width: '100%',
            padding: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderColor: COLORS.darkAmber,
            borderWidth: 1.5,
        },
        buttonText: {
            textAlign: 'center', 
            ...FONTS.h3, 
            color: COLORS.darkAmber
        }
    })
}

export {
    SplashScreenStyle,
    mainContentStyle
}