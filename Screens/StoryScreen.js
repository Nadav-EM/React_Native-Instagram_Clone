import { StyleSheet, Image, View, FlatList } from "react-native";
import React from "react";

const StoryScreen = ({ route }) => {
  //console.log(route.params.userId);
  // console.log(route.params.storyPhotos);
  return (
    <View style={styles.storyContainer}>
      <FlatList
        keyExtractor={(item) => item.story}
        data={route.params.storyPhotos}
        renderItem={(item) => (
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.item.story }} />
        )}
      />
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  storyContainer: {},
});
