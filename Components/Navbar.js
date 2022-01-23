import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Navbar = () => {
  return (
    <SafeAreaView style={styles.navContainer}>
      <View style={styles.inner}>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: "https://images.squarespace-cdn.com/content/v1/5a96fedd372b96a720791973/1553183544044-B6TLJ8VIEQ33AOMUX53L/audet-enterprises-commerical-property-services.png",
            }}
          />
        </View>
        <View style={styles.icons}>
          <AntDesign name="plussquareo" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    height: 70,
    backgroundColor: "black",
    justifyContent: "center",
    marginTop: 0,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "black",
    marginRight: 5,
    marginLeft: 5,
  },
  logo: {
    width: 160,
    height: 60,
  },
  icons: {
    width: "30%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
