import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const Posts = ({ posts }) => {
  const stringDate = (date) => {
    return dateToStr(date);
  };

  return (
    <div>
      <Row xs={1} sm={2} md={3}>
        {posts.map((post) => (
          <Col key={post.id} className="mb-2">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <p className="mb-0">
                    <span>Author: </span>
                    {post.author}
                  </p>
                  <p className="mb-0">
                    <span>Published: </span>
                    {stringDate(post.publishedDate)}
                  </p>
                  <p className="mb-0">
                    <span>Category: </span>
                    {post.category}
                  </p>
                  <br />
                  <p className="mb-0">{post.shortDescription}</p>
                </Card.Text>
                <Button variant="primary" as={NavLink} to={"/post/" + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Posts;
