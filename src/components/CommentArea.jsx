import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    reviews: []
  };
  getReviews = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4ZmY1ODRlNTIzNjAwMTU5YmNlOWMiLCJpYXQiOjE3MzI4MzcyMDgsImV4cCI6MTczNDA0NjgwOH0.NV7hezeCqFAoK1LV91czg4CJRaXqOZaOwKvIbaf7Kqc"
        }
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((reviews) => {
        this.setState({ reviews });
      })

      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.getReviews();
  }

  render() {
    console.log(this.state.reviews);
    return (
      <>
        <CommentList reviews={this.state.reviews} />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
