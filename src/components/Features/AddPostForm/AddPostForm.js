import { Button, Form } from "react-bootstrap";

const AddPostForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control placeholder="Enter author" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control placeholder="dd-mm-yyyy" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          placeholder="Leave a comment here"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control
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

export default AddPostForm;
