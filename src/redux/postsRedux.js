import shortid from "shortid";

//selectors
export const getAllPosts = (state) => state.posts;
export const getPost = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const POST_REMOVE = createActionName("POST_REMOVE");
const ADD_POST = createActionName("ADD_POST");
const EDIT_POST = createActionName("EDIT_POST");

// action creators
export const postRemove = (payload) => ({ type: POST_REMOVE, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const editPost = (payload) => ({ type: EDIT_POST, payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case POST_REMOVE:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { id: shortid(), ...action.payload }];
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};

export default postsReducer;
