import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "../components/Button";

export const WelcomeSplash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess{"\n"}The Music</Text>
      <Button text={"PLAY"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    paddingVertical: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 52,
    fontWeight: "500",
    color: "white",
  },
});
