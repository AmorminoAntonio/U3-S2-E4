import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    addedComment: {
      comment: "",
      rate: "1"
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/asin", {
      method: "POST",
      body: "application/JSON",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4ZmY1ODRlNTIzNjAwMTU5YmNlOWMiLCJpYXQiOjE3MzI4MzcyMDgsImV4cCI6MTczNDA0NjgwOH0.NV7hezeCqFAoK1LV91czg4CJRaXqOZaOwKvIbaf7Kqc"
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
      })
      .then(() => {});
  };

  render() {
    return (
      <Form onSubmit={() => {}}>
        <Form.Select
          className="mt-1"
          aria-label="Default select example"
          required
        >
          <option>Voto</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Form.Group
          className="mb-1"
          controlId="exampleForm.ControlTextarea1"
          required
        >
          <Form.Control
            as="textarea"
            placeholder="inserisci qui il tuo commento..."
            rows={3}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Aggiungi +
        </Button>
      </Form>
    );
  }
}

export default AddComment;
