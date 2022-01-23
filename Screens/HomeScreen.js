import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../Components/ProfilePicture";
import Feed from "../Components/Feed";
import Users from "../userDate";
import Navbar from "../Components/Navbar";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Navbar />
      <ProfilePicture list={Users} />
      <Feed list={Users} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
});
