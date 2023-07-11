import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Image, FlatList, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '../../Themed';
import GlobStyles from '../../../style/index.style';


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
        <ThemedText style={styles.userName}>Welcome Mufaddal</ThemedText>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={userInfo}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item.color)}
            >
              <ThemedText style={styles.tabText(activeJobType, item)}>{item.val}</ThemedText>
              <ThemedText style={styles.tabDeskText(activeJobType, item)}>{item.desc}</ThemedText>
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
          <ThemedText style={styles.scanTabText}>Today Scan Report</ThemedText>
          <TouchableOpacity>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.scanReportContainer}>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>In Time</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText()}>10:56 AM</ThemedText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>Out Time</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText()}>10:56 AM</ThemedText>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <ThemedText style={styles.scanReportText}>Duration</ThemedText>
            <View style={[GlobStyles.transparent.button.small, styles.scanReportButton]}>
              <ThemedText style={styles.tabDeskText()}>10:56 AM</ThemedText>
            </View>
          </View>
        </View>

        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[styles.scanButton, GlobStyles.Button.small]}>
          <TouchableOpacity style={styles.scanTab} >
            <ThemedText style={styles.tabText()}>Scan Now</ThemedText>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.scanTabText}>Latest Notification</ThemedText>
          <TouchableOpacity>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </TouchableOpacity>
        </View>


        <View style={[GlobStyles.transparent.container, styles.notificationContainer]}>
          <View >
            <ThemedText style={styles.notificationText}>Greetings to all.</ThemedText>
            <ThemedText style={styles.notificationText} numberOfLines={1}>We will be working from home on June 14 due to palkhi.\nDo not forget to send email while logging in and out. </ThemedText>
          </View>

          <View style={styles.notificationBottomContainer}>
            <TouchableOpacity>
              <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
            </TouchableOpacity>
            <ThemedText style={styles.notificationDateTime}>13 Jun 2023 | 01:11 PM</ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.scanTabText}>Checkout Our Latest Insta Posts</ThemedText>
          <TouchableOpacity>
            <ThemedText style={GlobStyles.Button.small}>View More</ThemedText>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  )
}

export default welcome