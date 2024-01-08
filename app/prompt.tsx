import { StyleSheet, View } from "react-native";
import { LinearGradientBackground } from "../src/components/LinearGradientBackground";

export default function Prompt() {
  return (
    <View style={s.container}>
      <LinearGradientBackground />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
