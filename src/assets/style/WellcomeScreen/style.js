import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../theme'

const SplashScreenStyle = ({...props}) => {
    const {changeColor, moveTitle, opacityLogo, scaleText, textChange} = props
    return StyleSheet.create({
        mainContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: changeColor
        },
        mainContent: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        imageStyling: {
            height: SIZES.width / 2.5,
            width: SIZES.width / 2.5,
            marginBottom: SIZES.padding,
            opacity: opacityLogo
        },
        headline: {
            ...FONTS.h4, 
            fontWeight: 'bold',
            transform: [
                {translateX:moveTitle.x},
                {translateY:moveTitle.y},
                {scale: scaleText},
            ],
            color: textChange
        },
        headline2: {
            color: COLORS.darkAmber
        }
    })
}

const mainContentStyle = () => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            flexShrink: 1,
        },
        mainContentTitle: {
            textAlign: 'center'
        }
    })
}

export {
    SplashScreenStyle,
    mainContentStyle
}