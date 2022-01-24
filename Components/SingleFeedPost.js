import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import DoubleClick from "react-native-double-click-instagram";
import { useNavigation } from "@react-navigation/native";
//Redux
import { useDispatch } from "react-redux";
import { setLike } from "../Redux/actions";

const windowWidth = Dimensions.get("screen").width;

const SingleFeedPost = ({ item }) => {
  //dispatch
  const dispatch = useDispatch();
  const handleLikeClicked = () => {
    dispatch(setLike(item.item.id));
  };
  const navigation = useNavigation();

  return (
    <View style={styles.userFeed}>
      <View style={styles.postNav}>
        <View>
          <View style={styles.imageAndInfoContainer}>
            <View style={styles.justImage}>
              <Image style={styles.postNavUserPic} source={{ uri: item.item.uri }} />
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Map", { city: item.item.location })}
                >
                  <Text style={{ color: "white" }}>{item.item.location}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ABC}>
              <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
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
          <View style={styles.firstThree}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleLikeClicked}>
              <AntDesign
                style={{ color: item.item.isLiked ? "red" : "white" }}
                name="heart"
                size={24}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.2}>
              <Ionicons name="md-chatbubble-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.2}>
              <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
        </View>
        <View style={{ paddingLeft: 7, marginBottom: 5, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white" }}>{`${item.item.likes} likes`}</Text>
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
    justifyContent: "space-between",
    width: windowWidth,
    flexDirection: "row",
    marginLeft: 3,
  },
  justImage: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  justLocation: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginLeft: 7.5,
  },
  icons: {
    marginTop: 3,
    marginLeft: 5,
    width: windowWidth,
    flexDirection: "row",
    paddingTop: 5,
  },
  poster: {
    width: "100%",
    flexDirection: "row",
  },

  ABC: {
    justifyContent: "center",
    marginTop: 10,
    marginRight: 5,
  },

  firstThree: {
    flexDirection: "row",
    width: "92%",
  },
});
