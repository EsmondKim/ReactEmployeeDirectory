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
            <p>This is a User Directory of the employees that use EfficienCorp's employee computer systems.  You can use it to learn more about EfficienCorp's wonderful employees and find their contact information.</p>
            <p>Click on the Users link to see one of our fantastic EfficienCorp employees, selected at random.</p>
            <p>Click on Search if you want to search for a particular user employee of EffienCorp.</p>
            <p>EfficenCorp is not a faceless corporation.  At EfficienCorp we're rocking your face.  What we mean, friend, is we are you and you are us.  Don't fight it.  Be one of us, at EfficienCorp.</p>  
            <p>At EfficienCorp we work efficiently.  We work no matter the weather.  We sleep with one eye open.  Scratch that.  We never sleep.  We just work and we WORK FOR YOU, the customer, the Average Joe.</p>
            <p>We definitely do not monitor what our employee users do, nor do we try to control what they think.  EfficienCorp would never do that.  They are as free as the birds in the air and don't have to say or do anything to stay in the good graces of their benevolent, magnanimous employer EfficienCorp.  If you join EfficienCorp, you shall be treated accordingly, just the same way as our other grateful employees.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
