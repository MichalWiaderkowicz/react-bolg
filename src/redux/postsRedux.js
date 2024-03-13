import shortid from "shortid";

//selectors
export const getAllPosts = (state) => state.posts;
export const getPost = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const POST_REMOVE = createActionName("POST_REMOVE");
const ADD_POST = createActionName("ADD_POST");

// action creators
export const postRemove = (payload) => ({ type: POST_REMOVE, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case POST_REMOVE:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  }
};

export default postsReducer;
