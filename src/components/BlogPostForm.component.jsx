import React, { useState } from "react";

import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  const { inputStyle, labelStyle } = styles;

  return (
    <View>
      <Text style={labelStyle}>Enter Title:</Text>
      <TextInput
        style={inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={labelStyle}>Enter Content:</Text>
      <TextInput
        style={inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
