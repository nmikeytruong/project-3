import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Profile() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome {}</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p><strong>Email</strong>: {}</p>
            
            <p><strong>Username</strong>: {}</p>
            
            <p><strong>Gender</strong>: {}</p>
            
            <p><strong>Looking For</strong>: {}</p>
            
            <p><strong>Interests</strong>: {}</p>
            
            <p><strong>About Me</strong>: {}</p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
