import { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    addedComment: {
      comment: "",
      rate: "1"
    }
  };

    handleSubmit = (e) => {
        
    }

  render() {
    return (
      <Container>
        <Form.Select className="mt-1" aria-label="Default select example">
        <option>Quanto consigli questa lettura?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mb-0"></Form.Label>
          <Form.Control as="textarea" placeholder="inserisci qui il tuo commento..." rows={3} />
        </Form.Group>
        <Button type="submit" variant="success">Aggiungi recensione</Button>
      </Container>
    );
  }
}

export default AddComment;

