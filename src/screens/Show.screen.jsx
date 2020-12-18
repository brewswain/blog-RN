import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlogContext } from "../contexts/Blog.context";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation: { getParam } }) => {
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === getParam("id"));

  const {} = styles;
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation: { navigate, getParam } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigate("Edit", { id: getParam("id") })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
