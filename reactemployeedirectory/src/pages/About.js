import React from "react";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Footer from "../components/Footer/Footer";
import corporateheroimg from "../components/Images/hero-splash.jpg";

function About() {
  return (
    <div>
      <Hero>
        <img src={corporateheroimg} alt="A corporate looking logo." />
      </Hero>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To EfficienCorp's Employee User Directory!</h1>

            <p>
              This is a User Directory of EfficienCorp employees. You can use it
              to learn more about EfficienCorp's wonderful employees and to find
              their contact information.
            </p>
            <p>
              Click on Search to see a table of EfficienCorp employees with the
              option to search by first name or to sort the table.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
