import { Container, Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
import AddComment from "./AddComment";

class BookList extends Component {
  state = {
    filterQuery: ""
  };

  render() {
    console.log("RENDER");
    return (
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs={4}>
            <FormControl
              type="text"
              placeholder="Ricerca il tuo libro qui..."
              value={this.state.filterQuery}
              onChange={(e) => this.setState({ filterQuery: e.target.value })}
            />
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4} lg={4} className="mt-5 gy-5">
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.filterQuery.toLowerCase())
            )
            .map((book) => (
              <Col key={book.asin}>
                <SingleBook book={book} />
                <AddComment book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
