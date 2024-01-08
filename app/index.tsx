import { StyleSheet, View } from "react-native";
import { WelcomeSplash } from "../src/screens/WelcomeSplash";
import { LinearGradientBackground } from "../src/components/LinearGradientBackground";

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradientBackground />
      <WelcomeSplash />
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
});
