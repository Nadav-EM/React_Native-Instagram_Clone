import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Navbar from "./Components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.gradient}
      >
        <StatusBar />
      </LinearGradient>

      <View style={styles.container}>
        <Navbar />
        <HomeScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },
  gradient: {
    width: "100%",
    height: 26,
    color: "white",
  },
});
