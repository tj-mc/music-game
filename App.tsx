import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WelcomeSplash} from "./src/screens/WelcomeSplash";
import { LinearGradient } from 'expo-linear-gradient';
import {LinearGradientBackground} from "./src/components/LinearGradientBackground";


export default function App() {
  return (
    <View style={styles.container}>
        <LinearGradientBackground/>
        <WelcomeSplash/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
