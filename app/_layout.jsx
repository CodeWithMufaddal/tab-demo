import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Link, Redirect, Stack, useGlobalSearchParams, useLocalSearchParams, usePathname, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, Platform, SafeAreaView, View, useColorScheme } from 'react-native';
import { icons, images } from '../constants';
import styles from '../style/tab.style';
import { TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { Manu, ScreenHeaderBtn, ThemedText } from '../components';
import { Pressable } from 'react-native';
import Modal from 'react-native-modal';

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
  const path = usePathname()
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
            // navigationBarHidden: true,
          }}
        >

          <Stack.Screen
            // name="[(tabs),(modal)]"
            name="(tabs)"

            options={{
              headerStyle: styles.tabsContainer,
              headerLeft: () => (
                <View 
                style={{
                  position: 'relative',
                  width: '100%',
                }}>
                  <Pressable onPress={() => router.replace("/")}>
                    <Image
                      source={icons.logo}
                      style={styles.logo}
                      resizeMode="contain"
                    />
                  </Pressable>
                  {path === "/" && <ThemedText style={styles.userName}>Welcome Mufaddal</ThemedText>}
                </View>

              ),

              headerRight: (props) => {
                return (
                  <View style={{
                    display: "flex", flexDirection: 'row',
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                  }}>
                    <ScreenHeaderBtn iconUrl={icons.lightbulb} dimension="70%" handleNavigation={() => router.push("/Achievement")} />
                    <ScreenHeaderBtn iconUrl={icons.bell} dimension="70%" handleNavigation={() => router.push("/Notification")} />
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%" handleNavigation={() => router.push("/modal")} />
                  </View>
                )
              },
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              presentation: 'modal',
              headerLeft: () => (
                <Pressable onPress={() => router.replace("/")}>
                  <Image
                    source={icons.logo}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </Pressable>
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row', }}>
                  <ScreenHeaderBtn iconUrl={icons.close_menu} dimension="70%" handleNavigation={() => router.push("/")} />
                </View>
              ),
              headerTitle: ""
            }} />
        </Stack>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </ThemeProvider>
    </>
  );
}
