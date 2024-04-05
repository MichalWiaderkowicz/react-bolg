import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  const [content, setContent] = useState(props.content || "");
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const emptyQuill = "<p><br></p>";

  const handleSubmit = () => {
    if (content === emptyQuill) return setContent("");
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const categories = useSelector(getAllCategories);

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="m-auto w-75 p-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            Title is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Enter author"
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            Author is too short (min is 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Published</Form.Label>
        <ReactDatePicker
          selected={publishedDate}
          onChange={(publishedDate) => setPublishedDate(publishedDate)}
        />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            This field is required
          </small>
        )}
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select category...</option>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 20 })}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Leave a comment here"
          as="textarea"
          rows={2}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            Short description is too short (min is 20)
          </small>
        )}
      </Form.Group>
      <Form.Group className="m-auto w-75 p-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
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
