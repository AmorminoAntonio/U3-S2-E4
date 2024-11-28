import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <>
    <Alert variant="primary" className="d-flex justify-content-center">
      <Alert.Link href="#">link d`esempio.</Alert.Link> Give it a click if you
      like.
    </Alert>
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={4}>
        <h1 className="display-2 fw-bold text-bg-warning rounded-3 text-center">BENVENUTO</h1>
          <h3 className="display-5 fs-3 text-center">
            Qui puoi trovare tutti i <strong>best seller</strong> del momento.
          </h3>
        </Col>
      </Row>
    </Container>
  </>
);

export default Welcome;
