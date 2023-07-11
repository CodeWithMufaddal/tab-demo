import React from "react"
import { StyleSheet } from "react-native"

import Colors from "../constants/Colors"
import { ExternalLink } from "./ExternalLink"
import { ThemedText, ThemedView } from "./Themed"

export default function EditScreenInfo({ path }) {
  return (
    <ThemedView>
      <ThemedView style={styles.getStartedContainer}>
        <ThemedText
          style={styles.getStartedThemedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </ThemedText>

        <ThemedView
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <ThemedText>{path}</ThemedText>
        </ThemedView>

        <ThemedText
          style={styles.getStartedThemedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the ThemedText, save the file, and your app will automatically
          update.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <ThemedText style={styles.helpLinkThemedText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making
            changes
          </ThemedText>
        </ExternalLink>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedThemedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center"
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkThemedText: {
    textAlign: "center"
  }
})
