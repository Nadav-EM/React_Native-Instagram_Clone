import { StyleSheet, View, FlatList, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
import SingleFeedPost from "./SingleFeedPost";

const Feed = ({ list }) => {
  return (
    <View style={styles.Container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={(list) => <SingleFeedPost item={list} />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    height: "100%",
  },
  userFeed: {},
  userPhoto: {
    resizeMode: "cover",
    marginTop: 10,
    width: windowWidth,
    height: 400,
  },
  postNav: {
    backgroundColor: "white",
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
    padding: 5,
  },
  poster: {
    width: "100%",

    flexDirection: "row",
  },
});
