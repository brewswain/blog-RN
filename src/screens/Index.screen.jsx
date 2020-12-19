import React, { useContext, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlogContext } from "../contexts/Blog.context";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation: { navigate, addListener } }) => {
  const { state, getAllBlogPosts, deleteBlogPost } = useContext(BlogContext);

  const { viewStyle, titleStyle, iconStyle } = styles;

  useEffect(() => {
    getAllBlogPosts();
    console.log("updated", state.length);

    // We're using the dependency array to
    // make it update whenever our blogposts updates, but this
    //is a new approach so i'm keeping it here for now.
    // const listener = addListener("didFocus", () => {
    //   getAllBlogPosts();
    // });
    // return () => {
    //   listener.remove();
    // };
  }, [state.length]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigate("Show", { id: item.id });
              }}
            >
              <View style={viewStyle}>
                <Text style={titleStyle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather style={iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
  },
});

export default IndexScreen;
