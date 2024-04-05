import { useDispatch, useSelector } from "react-redux";
import { getPost, postRemove } from "../../../redux/postsRedux";
import { Button, Modal } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import dateToStr from "../../../utils/dateToStr";

const Post = () => {
  const dispatch = useDispatch();
  const pathId = window.location.pathname.split("/").filter(Boolean).pop();
  const post = useSelector((state) => getPost(state, pathId));
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const modalPostRemove = (e) => {
    e.preventDefault();
    dispatch(postRemove(pathId));
  };

  const dateStr = dateToStr(post.publishedDate);

  if (!post) return <Navigate to="/" />;
  else
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
          <Button variant="outline-danger" onClick={handleShowModal}>
            Delete
          </Button>
        </div>
        <div>
          <p className="mb-0">
            Author:
            {post.author}
          </p>
          <p className="mb-0">
            Published:
            {dateStr}
          </p>
          <p className="mb-0">
            <span>Category: </span>
            {post.category}
          </p>
          <br />
          <p
            className="mb-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completly remove this post from the app. Are you
            sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={modalPostRemove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </article>
    );
};

export default Post;
