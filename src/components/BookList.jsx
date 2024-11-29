import { Container, Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    filterQuery: ""
  };

  render() {
    console.log("RENDER");
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <FormControl
              type="text"
              placeholder="Ricerca il tuo libro qui..."
              value={this.state.filterQuery}
              onChange={(e) => this.setState({ filterQuery: e.target.value })}
            />
          </Col>
        </Row>
        <Row md={4} className="mt-5 gy-5">
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.filterQuery.toLowerCase())
            )
            .map((book) => (
              <SingleBook book={book} key={book.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
