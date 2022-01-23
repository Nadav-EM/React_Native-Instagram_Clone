import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import Messages from "./Screens/Messages";
import Videos from "./Screens/VIdeos";
import Shop from "./Screens/Shop";

import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LinearGradient
        colors={["#CA1D7E", "#E35157", "#F2703F"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.gradient}
      >
        <StatusBar />
      </LinearGradient>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => false,
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarLabel: () => <Entypo name="home" size={24} color="white" />,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => false,
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarLabel: () => <AntDesign name="search1" size={24} color="white" />,
          }}
          name="Messages"
          component={Messages}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => false,
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarLabel: () => <MaterialIcons name="video-call" size={24} color="white" />,
          }}
          name="Videos"
          component={Videos}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => false,
            tabBarStyle: { backgroundColor: "black" },
            headerShown: false,
            tabBarLabel: () => <MaterialCommunityIcons name="shopping" size={24} color="white" />,
          }}
          name="Shop"
          component={Shop}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// tabBarStyle: { display: "none" } }
//{ headerShown: false }

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: 26,
    color: "white",
  },
});
