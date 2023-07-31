import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { ThemedText, ThemedView } from '../../Themed'
import styles from './NoteCard.style'
import GlobStyles from '../../../style/index.style'
import Colors from '../../../constants/Colors'
import { useColorScheme } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const NoteCard = ({ note, time, i ,numberOfLines}) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
        <View style={[GlobStyles.transparent.container, styles.notificationContainer]}>
            <View>
                <ThemedText style={styles.notificationText} numberOfLines={numberOfLines}>{note}</ThemedText>
            </View>

            <View style={styles.notificationBottomContainer}>
                <Pressable onPress={handleShow}>
                    <ThemedText style={[GlobStyles.Button.medium, styles.NotCardButton]}>Read More</ThemedText>
                </Pressable>

                <Modal
                    isVisible={show}
                    hasBackdrop={false}
                >
                    {/* <View style={{ backgroundColor: Colors[useColorScheme() ?? "light"].tint }}> */}
                    <ThemedView style={[styles.Modal, { display: 'flex', alignItems: "center" }]}>
                        <View>
                            <ThemedText style={styles.notificationText}>{note}</ThemedText>
                        </View>
                        <Pressable onPress={handleClose}>
                            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[styles.scanButton, GlobStyles.Button.small, { paddingHorizontal: 30, paddingVertical: 10 }]}>
                                <ThemedText style={styles.confirmButton}>Okey</ThemedText>
                            </LinearGradient>
                        </Pressable>
                    </ThemedView>

                </Modal>

                <ThemedText style={styles.notificationDateTime}>{time}</ThemedText>
            </View >
        </View >
    )
}

export default NoteCard