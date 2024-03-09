//selectors
export const getAllPosts = (state) => state.posts;
export const getPost = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const POST_REMOVE = createActionName("POST_REMOVE");

// action creators
export const postRemove = (payload) => ({ type: POST_REMOVE, payload });
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case POST_REMOVE:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
