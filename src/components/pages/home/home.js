import { Button } from "react-bootstrap";
import Posts from "../../Features/Posts/Posts";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <h2>All posts</h2>
        <Button variant="outline-info" as={NavLink} to="/post/add">
          Add Post
        </Button>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
