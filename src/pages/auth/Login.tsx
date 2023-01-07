import React from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { constraints } from "../../bootstrap/constraints";
import { useAuth } from "../../contexts/AuthContext";
import { User } from "../../types/User";

const Login = (): JSX.Element => {
  const { setUser } = useAuth();
  const handleSubmit = async (e: React.FormEvent):Promise<void> =>  {
    e.preventDefault();
    //do Something
    const user: User = {
      id: 1,
      name: "Example User",
      email: "example@example.com",
    };
    localStorage.setItem(constraints.userKey, JSON.stringify(user));
    setUser(user);
  }
  return(
    <Row className="justify-content-center">
      <Col sm md="10" className="p-0">
        <Card>
          <Card.Header as="h5">
            Login
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel label="Email" controlId="email" className="mb-2">
                <Form.Control placeholder="Email" type="email" />
              </FloatingLabel>
              <FloatingLabel label="Password" controlId="password" className="mb-2">
                <Form.Control placeholder="Password" type="password"/>
              </FloatingLabel>
              <Button variant="primary" type="submit" size="sm"  className="mb-2">
                <Icon name="box-arrow-in-right" marginEnd={2}/>Login
              </Button>
              <p>Don´t have an account? <Link to="/auth/register">Register</Link></p>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;