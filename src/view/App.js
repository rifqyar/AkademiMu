import React from 'react'
import { 
    View, 
    Text, 
    StatusBar
} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from './components/WellcomePageComponent/SplashScreen'

const App = () => {
  return (
    <SafeAreaProvider>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
        <SplashScreen></SplashScreen>
    </SafeAreaProvider>
  )
}

export default App