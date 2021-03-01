import React from "react";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import corporateheroimg from "../components/Images/corporateheroimg.jpg";
import "./About.css";

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
            <p>At EfficienCorp we work efficiently.  We work no matter the weather.  We sleep with one eye open.  Scratch that.  We never sleep.  We just work and we WORK FOR YOU, the customer, the Average Joe.</p>
            <p>Click on the Discover link to see one of our fantastic employees in our EffienCorp User Databse.</p>
            <p>We definitely do not monitor what our employee users do, nor do we try to control what they think.  They are as free as the birds in the air and don't have to say or do anything to stay in the good graces of their benevolent, magnanimous employer EfficienCorp.</p>
            <p>Click on search if you want to search for a particular user employee of EffienCorp.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
