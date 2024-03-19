import { useDispatch, useSelector } from "react-redux";
import { editPost, getPost } from "../../../redux/postsRedux";
import { Navigate, useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {
  const id = window.location.pathname.split("/").filter(Boolean).pop();
  const editedPost = useSelector((state) => getPost(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate("/");
  };

  if (!editedPost) return <Navigate to="/" />;

  return (
    <PostForm action={handleSubmit} actionText="Edit post" {...editedPost} />
  );
};

export default EditPostForm;
