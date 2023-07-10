import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { Image, Pressable, View, useColorScheme } from "react-native"
import Colors from "../../constants/Colors"
import styles from "../../style/tab.style"
import { Text } from "../../components/Themed"
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        translucency: false,
        headerTransparent: true,
        statusBarTranslucent: true,
        navigationBarHidden: true,
        tabBarStyle: styles.TabContainer,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "HOME",
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: styles.Tabs,
          // tabBarInactiveBackgroundColor: "white",
          tabBarInactiveTintColor: "white",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="DayOff"
        options={{
          headerShown: false,

          title: "DAY OFF",
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: styles.Tabs,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="WFH"
        options={{
          headerShown: false,

          title: "WFH",
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: styles.Tabs,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="Leave"
        options={{
          headerShown: false,

          title: "LEAVE",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelPosition: "beside-icon",
          // tabBarAccessibilityLabel: "Accessibility"
          tabBarLabelStyle: styles.Tabs,

        }}
      />
      <Tabs.Screen
        name="Notification"
        options={{
          headerShown: false,
          href: null,
          title: "Notification",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelPosition: "beside-icon",
          // tabBarAccessibilityLabel: "Accessibility"
          tabBarLabelStyle: styles.Tabs,

        }}
      />
    </Tabs>
  )
}
