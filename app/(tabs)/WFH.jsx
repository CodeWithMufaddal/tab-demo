import React, { useState } from 'react'
import { ThemedText } from '../../components/Themed'
import { Pressable, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { images } from '../../constants'
import { GlobStyles, applyStyles } from '../../style'
import moment from 'moment'
import { ApplyWFH, PastApplyCard } from '../../components'

const WFH = () => {


  const wfhData = [
    {
      startDate: "2 may 23",
      endDate: "3 may 2023",
      applyDate: "04 apr 23, 10:25 AM",
      status: "Pending",
      Days: 2,
      reason: "i am at my home for my sister engagement"
    },
    {
      startDate: "03 jan 2023",
      endDate: "03 jan 2023",
      applyDate: "02 jan 23, 10:25 AM",
      status: "Pending",
      Days: 1,
      reason: "meri train Tuesday ko raat ko hee jo subha pohucha dengi muje pune"
    },
    {
      startDate: "25 jul 2023",
      endDate: "26 jul 2023",
      applyDate: "25 jul 23, 10:25 AM",
      status: "Approved",
      Days: 2,
      reason: "due to moharram"
    },
    {
      startDate: "26 Dec 2022",
      endDate: "28 Dec 2022",
      applyDate: "20 Dec 23, 12:25 PM",
      status: "Pending",
      Days: 3,
      reason: "i have to goo for home trip after two days that is why i need this WFH."
    },
  ]

  return (
    <ImageBackground source={images.bgHome} style={[GlobStyles.backgroundImage]}>
      <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(0,0,0,1)', 'transparent']} style={GlobStyles.linearGradient}>
        <SafeAreaView style={GlobStyles.safeAreaView}>
          <View style={[GlobStyles.spaceHorizontal, { marginTop: 138 }]}>
            <ApplyWFH />
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 85 }}>
              {wfhData && wfhData.map((data, i) => <PastApplyCard key={i} data={data} />)}
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  )
}

export default WFH