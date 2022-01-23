import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DoubleClick from "react-native-double-click-instagram";

const windowWidth = Dimensions.get("screen").width;

const SingleFeedPost = ({ item }) => {
  const [like, setLike] = useState(item.item.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClicked = () => {
    isLiked ? setLike((prev) => prev - 1) : setLike((prev) => prev + 1);
    setIsLiked((prev) => !prev);
  };

  return (
    <View style={styles.userFeed}>
      <View style={styles.postNav}>
        <View style={styles.imageAndInfoContainer}>
          <View style={styles.justImage}>
            <Image style={styles.postNavUserPic} source={{ uri: item.item.uri }} />
          </View>
          <View style={styles.justLocation}>
            <Text
              style={{
                fontWeight: "bold",
                margin: 0,
                color: "white",
              }}
            >
              {item.item.name}
            </Text>
            <Text style={{ color: "white" }}>{item.item.location}</Text>
          </View>
        </View>
      </View>
      <View>
        <DoubleClick icon delay={300} timeout={1000} doubleClick={handleLikeClicked}>
          <View>
            <Image style={styles.userPhoto} source={{ uri: item.item.feedPhoto }} />
          </View>
        </DoubleClick>
      </View>
      <View>
        <View style={styles.icons}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleLikeClicked}>
            <AntDesign style={{ color: isLiked ? "red" : "white" }} name="heart" size={24} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.2}>
            <Ionicons name="md-chatbubble-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.2}>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 5, marginBottom: 5, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>{`${like} likes`}</Text>
          <View style={styles.poster}>
            <Text style={{ paddingRight: 5, fontWeight: "bold", color: "white" }}>
              {item.item.name}
            </Text>
            <Text style={{ color: "white" }}>{item.item.description}</Text>
          </View>
          <Text style={{ color: "gray" }}>{item.item.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleFeedPost;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "black",
    height: "100%",
  },
  userFeed: {
    backgroundColor: "black",
  },
  userPhoto: {
    resizeMode: "cover",
    marginTop: 10,
    width: windowWidth,
    height: 400,
  },
  postNav: {
    backgroundColor: "black",
    height: 50,
    width: windowWidth,
  },
  postNavUserPic: {
    marginTop: 10,
    marginLeft: 10,
    padding: 0,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  imageAndInfoContainer: {
    flexDirection: "row",
    marginLeft: 3,
  },
  justImage: {
    justifyContent: "flex-end",
  },
  justLocation: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: 7.5,
  },
  icons: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
  },
  poster: {
    width: "100%",
    flexDirection: "row",
  },
});
