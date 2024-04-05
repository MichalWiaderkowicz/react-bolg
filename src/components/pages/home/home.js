import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Posts from "../../Features/Posts/Posts";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";

const Home = (props) => {
  const posts = useSelector(getAllPosts);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <h2>All posts</h2>
        <Button variant="outline-info" as={NavLink} to="/post/add">
          Add Post
        </Button>
      </div>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
