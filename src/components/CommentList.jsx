import { ListGroup } from "react-bootstrap";

const CommentList = ({ reviews }) => (
  <ListGroup>
    {reviews.map((review) => (
      <ListGroup.Item action variant="primary">
        <h5 className="mt-3 mb-0 fw-bold fs-5">Author:</h5>
        <span className="display-5 fs-5">{review.author}</span>
        <br />
        <h5 className="mt-3 mb-0 fw-bold fs-5">Comment:</h5>
        <span className="display-5 fs-5">{review.comment}</span>
        <br />
        <h5 className="mt-3 mb-0 fw-bold fs-5">Rate:</h5>
        <span className="display-5 fs-5">{review.rate}</span>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default CommentList;
