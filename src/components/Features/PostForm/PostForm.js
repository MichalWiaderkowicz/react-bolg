import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
        <ReactDatePicker
          selected={publishedDate}
          onChange={(publishedDate) => setPublishedDate(publishedDate)}
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Leave a comment here"
          as="textarea"
          rows={2}
        />
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Edit post
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,

  actionText: PropTypes.string.isRequired,
};

export default PostForm;
