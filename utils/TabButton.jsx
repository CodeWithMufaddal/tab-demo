import { Pressable, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../components/Themed'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../style/tab.style'

const TabButton = ({ routeName, navigation, activeTab, setActiveTab }) => {
    let selected = activeTab == routeName

    return (
        <Pressable
            style={{
                marginBottom: "auto",
                marginTop: "auto",
            }}
            onPress={() => {
                setActiveTab(routeName)
                navigation.navigate(routeName)
            }}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={selected ? ['red', 'orange'] : ['transparent', 'transparent']} style={styles.Tabs}>
                <ThemedText style={{}}>{routeName === "index" ? "HOME" : routeName === "DayOff" ? "DAY OFF" : routeName.toUpperCase()}</ThemedText>
            </LinearGradient>
        </Pressable>
    )
}

export default TabButton