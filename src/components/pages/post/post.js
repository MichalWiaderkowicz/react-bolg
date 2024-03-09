import { useSelector } from "react-redux";
import { getPost } from "../../../redux/postsRedux";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Post = () => {
  const pathId = window.location.pathname.split("/").filter(Boolean).pop();
  const post = useSelector((state) => getPost(state, pathId));

  return (
    <article>
      <div>
        <h2>{post.title}</h2>
        <Button
          variant="outline-info"
          as={NavLink}
          to={"/post/edit/" + post.id}
        >
          Edit
        </Button>
        <Button variant="outline-danger">Delete</Button>
      </div>
      <div>
        <p className="mb-0">
          Author:
          {post.author}
        </p>
        <p className="mb-0">
          Published:
          {post.publishedDate}
        </p>
        <br />
        <p className="mb-0">{post.shortDescription}</p>
      </div>
    </article>
  );
};

export default Post;
