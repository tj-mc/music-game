import { StyleSheet, Text, View } from "react-native";
import { WelcomeSplash } from "../src/screens/WelcomeSplash";
import { LinearGradientBackground } from "../src/components/LinearGradientBackground";
import React from "react";
import { Button } from "../src/components/Button";

export default function HowTo() {
  return (
    <View style={styles.container}>
      <LinearGradientBackground />
      <Text style={styles.text}>How to PLAY!</Text>
      <Text style={styles.description}>
        The Music Game is social game that gets your musical brain juices
        flowing. Each player will take their turn to read a prompt, then pick a
        song they think suits. Pass the phone around in a circle to build a
        truly unique playlist!
      </Text>
      <Button text={"Got it!"} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 52,
    fontWeight: "500",
    color: "white",
  },
  description: {
    color: "white",
  },
});
