import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import Users from "./userDate";

//Components
import HomeScreen from "./Screens/HomeScreen";
import Messages from "./Screens/Messages";
import Videos from "./Screens/VIdeos";
import Shop from "./Screens/Shop";
import Own from "./Screens/Own";

//Navigation
import { Provider } from "react-redux";
import { Store } from "./Redux/store";
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
const op = {
  tabBarIcon: () => false,
  tabBarStyle: { backgroundColor: "black" },
  headerShown: false,
};

export default function App() {
  return (
    <Provider store={Store}>
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
              ...op,
              tabBarLabel: () => (
                <Entypo style={{ marginLeft: 25 }} name="home" size={24} color="white" />
              ),
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              ...op,
              tabBarLabel: () => <AntDesign name="search1" size={24} color="white" />,
            }}
            name="Messages"
            component={Messages}
          />
          <Tab.Screen
            options={{
              ...op,
              tabBarLabel: () => <MaterialIcons name="video-call" size={24} color="white" />,
            }}
            name="Videos"
            component={Videos}
          />
          <Tab.Screen
            options={{
              ...op,
              tabBarLabel: () => <MaterialCommunityIcons name="shopping" size={24} color="white" />,
            }}
            name="Shop"
            component={Shop}
          />
          <Tab.Screen
            options={{
              ...op,
              tabBarLabel: () => (
                <View style={styles.imgContainer}>
                  <Image style={styles.img} source={{ uri: Users[0].uri }} />
                </View>
              ),
            }}
            name="Own"
            component={Own}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
});
