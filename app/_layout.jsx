import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, View, useColorScheme } from 'react-native';
import { icons, images } from '../constants';
import styles from '../style/tab.style';
import { TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ScreenHeaderBtn } from '../components';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
          ...FontAwesome.font,
          DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
          DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
          DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          onLayout={onLayoutRootView}
          screenOptions={{
            headerTransparent: true,
            statusBarTranslucent: true,
            navigationBarHidden: true,
          }}
        >

          <Stack.Screen
            name="(tabs)"
            options={{
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.push(`/`)}>
                  <Image
                    source={icons.logo}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row', }}>
                  <ScreenHeaderBtn iconUrl={icons.lightbulb} dimension="70%" />
                  <ScreenHeaderBtn iconUrl={icons.bell} dimension="70%" handleNavigate={() => router.push(`/Notification`)} />
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%" />
                </View>
              ),
              headerTitle: ""
            }}
          />


          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />


          <Stack.Screen
            name="Notification"
            options={{
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.push(`/`)}>
                  <Image
                    source={icons.logo}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row', }}>
                  <ScreenHeaderBtn iconUrl={icons.lightbulb} dimension="70%" />
                  <ScreenHeaderBtn iconUrl={icons.bell} dimension="70%" handleNavigate={() => router.push(`/Notification`)} />
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%" />
                </View>
              ),
              headerTitle: ""
            }}
          />
        </Stack>
        {/* </SafeAreaView> */}
        <StatusBar style='light' />
      </ThemeProvider>
    </>
  );
}
