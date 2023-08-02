import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { GlobStyles, applyStyles } from '../style'
import { ThemedText } from './Themed'
import { LinearGradient } from 'expo-linear-gradient'
import Structure from './Structure'

const ApplyWFH = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <View style={[applyStyles.applyHeader]}>
      <View style={applyStyles.tab}>
        <ThemedText style={applyStyles.tabText}>7</ThemedText>
        <ThemedText style={applyStyles.tabText}>Applied WFH</ThemedText>
      </View>

      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[applyStyles.applyButton, GlobStyles.Button.medium]}>
        <Pressable onPress={handleShow} style={applyStyles.scanTab} >
          <ThemedText style={applyStyles.tabText}>Apply WFH</ThemedText>
        </Pressable>
      </LinearGradient>

      <Modal
        isVisible={show}
        hasBackdrop={false}
        style={{
          backgroundColor: 'red',
          margin: 0
        }}
        hideModalContentWhileAnimating
        coverScreen
        statusBarTranslucent
      >
        <Structure>
          <ThemedText>Hello World </ThemedText>
          <Pressable onPress={handleClose}>
            <ThemedText>close</ThemedText>
          </Pressable>
        </Structure>
      </Modal>
    </View>
  )
}

export default ApplyWFH