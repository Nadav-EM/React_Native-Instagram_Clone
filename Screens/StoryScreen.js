import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const StoryScreen = ({ route }) => {
  //
  const navigation = useNavigation();
  //console.log(route.params.data.storyPhotos);

  return (
    <View style={styles.main}>
      <FlatList
        keyExtractor={(item) => item.story}
        data={route.params.data.storyPhotos}
        renderItem={(item, index) => (
          <View>
            <View style={styles.userContainer}>
              <TouchableOpacity
                style={{ zIndex: 2 }}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Image style={styles.user} source={{ uri: route.params.data.uri }} />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: -15,
                  marginLeft: -5,
                  fontSize: 14,
                  zIndex: 2,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {route.params.data.name}
              </Text>
              <Text
                style={{ marginTop: -13, marginLeft: 7.5, fontSize: 13, zIndex: 2, color: "gray" }}
              >
                {route.params.data.time}
              </Text>
            </View>
            <View>
              <ImageBackground
                style={styles.storyBackgroundImage}
                source={{ uri: item.item.story }}
              ></ImageBackground>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  main: { flex: 1 },
  storyBackgroundImage: {
    justifyContent: "center",
    height: screenHeight,
    width: screenWidth,
    resizeMode: "cover",
  },
  user: {
    zIndex: 2,
    width: 40,
    height: 40,
    margin: 20,
    borderRadius: 50,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
  },
});
