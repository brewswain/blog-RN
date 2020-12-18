import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { BlogPostForm } from "../components";
import { BlogContext } from "../contexts/Blog.context";

const EditScreen = ({ navigation: { getParam, pop } }) => {
  const id = getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  const {} = styles;
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          // Navigation method to place us on previous screen
          pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
