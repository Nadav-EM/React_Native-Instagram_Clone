import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProfilePicture from "../Components/ProfilePicture";
import Feed from "../Components/Feed";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { users } = useSelector((state) => state.userReducer);
  return (
    <View style={styles.homeScreen}>
      <Navbar />
      <ProfilePicture list={users} />
      <Feed list={users} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
});
