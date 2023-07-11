import { Pressable, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../components/Themed'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../style/tab.style'

const TabButton = ({ routeName, navigation, activeTab, setActiveTab }) => {
    let selected = activeTab == routeName

    return (
        <Pressable onPress={() => {
            setActiveTab(routeName)
            navigation.navigate(routeName)
        }}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={selected ? ['red', 'orange'] : ['transparent', 'transparent']} style={styles.Tabs}>
                <ThemedText>{routeName === "index" ? "Home" : routeName}</ThemedText>
            </LinearGradient>
        </Pressable>
    )
}

export default TabButton