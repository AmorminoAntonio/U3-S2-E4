import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
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
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
