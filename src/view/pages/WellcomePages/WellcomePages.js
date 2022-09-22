import React from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native'
import { 
  Button,
  Caption,
  Subheading, 
  Title 
} from 'react-native-paper'
import { COLORS, FONTS, SIZES } from '../../../assets/theme'
import Lottie from 'lottie-react-native';
import { mainContentStyle } from '../../../assets/style/WellcomeScreen/style';

const image = require('../../../assets/icon/lf30_editor_pyzthbso.json')
const img = require('../../../assets/icon/101546-study-abroad.json')

const WellcomePages = () => {
  const styles = mainContentStyle()

  return (
    <View style={styles.mainContainer}>
      {/* Section Gambar */}
      <View style={styles.sectionImageContainer}>
        <View style={styles.imageContainer}>
          <Lottie source={image} autoPlay loop />
        </View>
        <View style={styles.captionContainer}>
          <Title style={styles.captionText}>Selamat Datang</Title>
          <Subheading style={styles.subheadingText}>
            Silahkan klik tombol login untuk dapat menggunakan aplikasi
            <Text style={styles.subheadingInnerText}> AKADEMI<Text style={styles.subheadingInnerText2}>MU</Text> </Text>
          </Subheading>
        </View>
      </View>

      {/* Section Footer (Text & Button) */}
      <View style={styles.sectionFooterContainer}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WellcomePages