import { StatusBar } from "expo-status-bar"
import { Pressable, StyleSheet , View} from "react-native"
import { Structure, ThemedText, ThemedView } from "../components"
import { router } from "expo-router"
import GlobStyles from "../style/index.style"
import { FONT, SIZES } from "../constants"

export default function ModalScreen() {
  const data = [
    {
      name: "Update Profile",
      route: "/UpdateProfile",
    },
    {
      name: "Terms and Conditions",
      route: "/terms-and-conditions",
    },
    {
      name: "Rate This App",
      route: "/RateApp",
    },
    {
      name: "FeedBack",
      route: "/FeedBack",
    },
    {
      name: "Request Invoice",
      route: "/RequestInvoice",
    },
    {
      name: "Meeting",
      route: "/meeting",
    },
    {
      name: "Log Out",
      route: "/logout",
    },
  ]
  return (
    <Structure style={styles.container}>
      <View style={styles.manuBox}>
        {
          data.map(({ name, route }, index) => {
            return (
              <Pressable key={index} onPress={() => router.push(route)} style={[GlobStyles.transparent.button.small, styles.modalTabs]}>
                <ThemedText style={styles.manuText}>{name}</ThemedText>
              </Pressable>
            )
          })
        }
      </View>
    </Structure>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  manuBox: {
    marginTop: 100,
    flex: 1,
    width: "75%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  manuText: {
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: FONT.medium

  },
  modalTabs: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 13,
    paddingVertical: SIZES.small,
  }
})
