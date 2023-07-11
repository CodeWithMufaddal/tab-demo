import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import Colors from "../../constants/Colors"
import styles from "../../style/tab.style"
import { useState } from "react"
import TabButton from "../../utils/TabButton"


export default function TabLayout() {
  const colorScheme = useColorScheme()
  const [activeTab, setActiveTab] = useState('index')

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
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "HOME",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelStyle: styles.TabsContainer,
          tabBarInactiveTintColor: "white",
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />,
        })}
      />

      <Tabs.Screen
        name="DayOff"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "DAY OFF",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelStyle: styles.Tabs,
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />,
        })}
      />
      <Tabs.Screen
        name="WFH"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "WFH",
          tabBarIconStyle: { display: "none" },
          // tabBarLabelStyle: styles.Tabs,
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />,
        })}
      />

      <Tabs.Screen
        name="Leave"
        options={({ route, navigation }) => ({
          headerShown: false,
          title: "LEAVE",
          tabBarIconStyle: { display: "none" },
          tabBarButton: () => <TabButton routeName={route.name} navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />,
        })}
      />

      <Tabs.Screen
        name="Notification"
        options={({ route }) => ({
          headerShown: false,
          href: null,
          title: "Notification",
          tabBarIconStyle: { display: "none" },
          // tabBarButton: () =>,
        })}
      />
      <Tabs.Screen
        name="Achievement"
        options={({ route }) => ({
          headerShown: false,
          href: null,
          title: "Achievement",
          tabBarIconStyle: { display: "none" },
        })}
      />
    </Tabs>
  )
}
