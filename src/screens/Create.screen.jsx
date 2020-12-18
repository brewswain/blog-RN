import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { BlogPostForm } from "../components";
import { BlogContext } from "../contexts/Blog.context";

const CreateScreen = ({ navigation: { navigate } }) => {
  const {} = styles;

  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigate("Index");
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
