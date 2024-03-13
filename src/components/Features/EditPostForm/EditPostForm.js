import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const EditPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setShortDescription("");
    setContent("");
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          placeholder="dd-mm-yyyy"
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Leave a comment here"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Leave a comment here"
          as="textarea"
          rows={10}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default EditPostForm;
