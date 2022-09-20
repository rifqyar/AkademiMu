import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../theme'

const dynamicStyle = () => {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: COLORS.white
        },
        headerContainer : {
            flex: 0.2,
            backgroundColor: COLORS.darkAmber,
            borderBottomLeftRadius: SIZES.padding * 3,
            borderBottomRightRadius: SIZES.padding * 3,
            elevation: 10
        },
        headline: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems:'center'
        },
        headlineContainer: {
            flexShrink: 1,
            flexDirection: 'row'
        },
        welcomeText: {
            color: COLORS.white,
            elevation: 10,
            flex: 1,
            flexWrap: 'wrap'
        },
        imageStyling: {
            width: SIZES.width / 10,
            height: SIZES.width / 8,
            margin: SIZES.padding * 3
        },
        mainContent: {
            flex: 0.8,
            marginTop: SIZES.padding * 2,
            marginHorizontal: SIZES.padding * 3
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
    dynamicStyle,
    mainContentStyle
}