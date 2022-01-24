import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ProfilePicture = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(list) => (
          <View style={styles.storyContainer}>
            <LinearGradient
              colors={["#CA1D7E", "#E35157", "#F2703F"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.gradient}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("StoryScren", { storyPhotos: list.item.storyPhotos })
                }
                activeOpacity={0.9}
              >
                <Image style={styles.imageContaier} source={{ uri: list.item.uri }} />
              </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.userName}>{list.item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "black",
    flexDirection: "row",
    height: 125,
  },
  storyContainer: {
    width: 84,
    height: 84,
    margin: 10,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "black",
  },
  imageContaier: {
    resizeMode: "cover",
    width: 74,
    height: 74,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: "white",
  },
  userName: {
    color: "white",
    marginTop: 1,
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    color: "#4C64FF",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
  },
  buttonContainer: {
    width: 200,
    alignItems: "center",
  },
  gradient: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
