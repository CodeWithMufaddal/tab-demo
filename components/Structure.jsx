import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import { images } from '../constants';
import styles from '../style/tab.style';

const Structure = ({ children, style }) => {
    return (
        <ImageBackground source={images.bgHome} style={[styles.backgroundImage]}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(48, 25, 25, 1)', 'transparent']} style={styles.linearGradient}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 140, marginBottom: 85 }}>
                        {children}
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Structure