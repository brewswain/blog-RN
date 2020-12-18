import React, { useContext } from "react";

import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Context } from "../contexts/Blog.context";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  const {} = styles;

  return (
    <View>
      <Text>Index</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
