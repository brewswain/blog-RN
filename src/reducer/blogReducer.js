const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "add_blogpost":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

export default blogReducer;
