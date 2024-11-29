import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="my-4">
            <Card
              className={
                this.state.selected
                  ? "border-5 border-warning shadow"
                  : "border-secondary shadow"
              }
            >
              <Card.Img
                variant="top"
                src={this.props.book.img}
                onClick={() =>
                  this.setState({ selected: !this.state.selected })
                }
              />
              <Card.Body>
                <Card.Title className="text-center fs-4 text-black fw-light">
                  {this.props.book.title}
                </Card.Title>
                {this.state.selected && (
                  <CommentArea asin={this.props.book.asin} />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
