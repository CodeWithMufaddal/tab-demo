import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { Welcome } from '../../components';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../../constants';
import styles from '../../style/tab.style';
import { SafeAreaView } from 'react-native';


export default function TabOneScreen() {
  const router = useRouter()
  return (
    <ImageBackground source={images.bgHome} style={styles.backgroundImage}>
      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(0,0,0,1)', 'transparent']} style={styles.linearGradient}>
        <SafeAreaView style={styles.safeAreaView}>

          <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 110 }}>

            <Welcome
            />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
