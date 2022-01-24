import { StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import StoryScren from "./StoryScreen";
import Map from "./MapScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Home",
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Story",
          headerShown: false,
        }}
        name="StoryScren"
        component={StoryScren}
      />
      <Stack.Screen
        options={{
          title: "Map",
          headerShown: false,
        }}
        name="Map"
        component={Map}
      />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
