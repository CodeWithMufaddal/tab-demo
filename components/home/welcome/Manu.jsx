import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { ThemedText } from '../../Themed'
import { Stack, router } from 'expo-router'
import { icons } from '../../../constants'
import styles from '../../../style/tab.style'
import ScreenHeaderBtn from '../../common/header/ScreenHeaderBtn'
import Structure from '../../Structure'

const Manu = ({ show, handleClose }) => {
    return (
        <Modal isVisible={show} coverScreen={true} style={{margin: 0 , padding: 0}} >
            <Structure>
                <View style={{ flex: 1, alignItems: "start" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'flex-end' }}>
                        <Pressable onPress={() => router.push("/")}>
                            <Image
                                source={icons.logo}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </Pressable>
                        <ScreenHeaderBtn iconUrl={icons.close_menu} dimension="100%" handleNavigation={handleClose} />
                    </View>
                </View>
            </Structure>
        </Modal>
    )
}

export default Manu