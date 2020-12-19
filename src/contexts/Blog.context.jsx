import blogReducer from "../reducer/blogReducer";
import createDataContext from "./createData.context";
import jsonServer from "../api/jsonServer";

const getAllBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: res.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context: BlogContext, Provider } = createDataContext(
  blogReducer,
  { getAllBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
