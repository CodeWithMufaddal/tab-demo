import React, { useState } from 'react'
import {  TextInput, TouchableOpacity, Image, FlatList, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Text as ThemeText , View as ThemeView } from '../../Themed';
// import { Text, View } from './Themed';


const welcome = ({ handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Exp")
  const router = useRouter()
  const userInfo = [
    {
      title: "avg time",
      val: "9hr 11m",
      desc: "Avg. Time",
      color: "#E26464",
    },
    {
      title: "years",
      val: "0.8Yrs",
      desc: "Exp",
      color: "#BC8933",
    },
    {
      title: "emergency leave",
      val: "2",
      desc: "EL",
      color: "#408E40",
    },
    {
      title: "planned leave",
      val: "10",
      desc: "PL",
      color: "#408E40",
    }];
  return (
    <View>
      <View style={styles.container}>
        <ThemeText style={styles.userName}>Welcome Mufaddal</ThemeText>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={userInfo}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item.color)}
            >
              <ThemeText style={styles.tabText(activeJobType, item)}>{item.val}</ThemeText>
              <ThemeText style={styles.tabDeskText(activeJobType, item)}>{item.desc}</ThemeText>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          style={styles.tabBox}
        />
      </View>

      {/* HR */}
      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemeText style={styles.scanTabText}>Today Scan Report</ThemeText>
          <TouchableOpacity>
            <ThemeText style={styles.Button.small}>View More</ThemeText>
          </TouchableOpacity>
        </View>

        <View style={styles.scanReportContainer}>
          <View style={styles.scanInTime}>
            <ThemeText style={styles.scanReportText}>In Time</ThemeText>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <ThemeText style={styles.tabDeskText()}>10:56 AM</ThemeText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemeText style={styles.scanReportText}>Out Time</ThemeText>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <ThemeText style={styles.tabDeskText()}>10:56 AM</ThemeText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemeText style={styles.scanReportText}>Duration</ThemeText>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <ThemeText style={styles.tabDeskText()}>10:56 AM</ThemeText>
            </View>
          </View>
        </View>

        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[styles.scanButton, styles.Button.small]}>
          <TouchableOpacity style={styles.scanTab} >
            <ThemeText style={styles.tabText()}>Scan Now</ThemeText>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemeText style={styles.scanTabText}>Latest Notification</ThemeText>
          <TouchableOpacity>
            <ThemeText style={styles.Button.small}>View More</ThemeText>
          </TouchableOpacity>
        </View>


        <View style={[styles.transparent.container, styles.notificationContainer]}>
          <View >
            <ThemeText style={styles.notificationText}>Greetings to all.</ThemeText>
            <ThemeText style={styles.notificationText} numberOfLines={1}>We will be working from home on June 14 due to palkhi.\nDo not forget to send email while logging in and out. </ThemeText>
          </View>

          <View style={styles.notificationBottomContainer}>
            <TouchableOpacity>
              <ThemeText style={styles.Button.small}>View More</ThemeText>
            </TouchableOpacity>
            <ThemeText style={styles.notificationDateTime}>13 Jun 2023 | 01:11 PM</ThemeText>
          </View>
        </View>
      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemeText style={styles.scanTabText}>Checkout Our Latest Insta Posts</ThemeText>
          <TouchableOpacity>
            <ThemeText style={styles.Button.small}>View More</ThemeText>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  )
}

export default welcome