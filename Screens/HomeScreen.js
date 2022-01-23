import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../Components/ProfilePicture";
import Feed from "../Components/Feed";
import Users from "../userDate";

const HomeScreen = () => {
  return (
    <View>
      <ProfilePicture list={Users} />
      <Feed list={Users} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
