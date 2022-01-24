import { StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";
import StoryScren from "./StoryScreen";
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
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
