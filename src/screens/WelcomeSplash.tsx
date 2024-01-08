import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button as RNButton,
} from "react-native";
import React from "react";
import { Button } from "../components/Button";
import { Link, useRouter } from "expo-router";

export const WelcomeSplash = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess{"\n"}The Music</Text>
      <Button
        text={"PLAY"}
        onPress={() => {
          router.push("/how-to");
        }}
      />
      <View>
        <RNButton title={"How To"} onPress={() => router.push("/how-to")} />
        <RNButton
          title={"Who's playing"}
          onPress={() => router.push("/select-players")}
        />
        <RNButton title={"Prompt"} onPress={() => router.push("/prompt")} />
      </View>
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
