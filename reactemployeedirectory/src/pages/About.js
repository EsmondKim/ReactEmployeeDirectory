import React from "react";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import corporateheroimg from "../components/Images/corporateheroimg.jpg";

function About() {
  return (
    <div>
      <Hero>
        <img
          src={corporateheroimg}
          alt="Corporate building towering over you."/>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To EfficienCorp's Employee User Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>This is a User Directory of EfficienCorp employees.  You can use it to learn more about EfficienCorp's wonderful employees and find their contact information.</p>
            <p>Click on the Users link to see a random selection of our fantastic EfficienCorp employees along with their contact info.</p>
            <p>Click on Search if you want to see EfficienCorp employees with the option to search for a particular EfficienCorp user.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
