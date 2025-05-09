import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import '../App.css';
const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Dobrodošli u Kviz iz Pravoslavne Veronauke!</h1>
          <p className="lead">
            Testirajte svoje znanje o pravoslavnoj veri.
          </p>
          <Link to="/grade1">
            <Button variant="primary" size="lg">
              Počni Kviz
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Kako igra funkcioniše?</h2>
          <p>
            Kroz kviz ćete biti testirani na osnovnim pitanjima iz Pravoslavne veronauke.
            Odgovarajte na pitanja i saznajte koliko ste spremni!
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>Napomena:</h3>
          <p>
            Ovaj kviz je namenjen učenicima osnovnih škola, a pitanja su prilagođena
            njihovom uzrastu.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
