import { Pressable, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useState } from "react";

type Props = {
  text: string;
  onPress: () => void;
};

export const Button = ({ text, onPress }: Props) => {
  const onPressInternal = () => {
    onPress();
    void Haptics.selectionAsync();
  };

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        onPressInternal();
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#A0F9FF", "#F99AEF"]}
        style={{
          borderRadius: 32,
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
        start={{ x: 0.1, y: 0 }}
      />

      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderColor: "rgba(62,62,62,0.18)",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    paddingVertical: 14,
    shadowColor: "#A0F9FF",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    minWidth: 200,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    fontSize: 24,
  },
});
