import React, { useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import { Register as RegisterType } from "../../types/auth/Register";
import { useAuth } from '../../contexts/AuthContext';
import { User } from "../../types/User";

const Register = (): JSX.Element => {
  const { setUser } = useAuth();
  const [inputs, setInputs] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const handleChange = (key: string, value: string) => setInputs({...inputs, [key]: value });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    const { name, email } = inputs;
    const user: User = { id: 1, name, email };
    setUser(user);
  }
  return(
    <Row className="justify-content-center">
      <Col sm md="10" className="p-0">
        <Card>
          <Card.Header as="h5">
            Register
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel label="Name" controlId="name" className="mb-2">
                <Form.Control placeholder="Name" value={inputs.name} 
                  onChange={e => handleChange('name', e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel label="Email" controlId="email" className="mb-2">
                <Form.Control type="email" placeholder="Email" value={inputs.email}
                onChange={e => handleChange('email', e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel label="Password" controlId="password" className="mb-2">
                <Form.Control placeholder="Password" type="password" value={inputs.password}
                  autoComplete="password" onChange={e => handleChange('password', e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel label="Password Confirmation" controlId="password_confirmation" className="mb-2">
                <Form.Control placeholder="Password Confirmation" type="password" 
                value={inputs.password_confirmation} autoComplete="password_confirmation"
                onChange={e => handleChange('password_confirmation', e.target.value)}/>
              </FloatingLabel>
              <Button variant="primary" type="submit" size="sm" className="mb-1">
                <Icon name="box-arrow-in-right" marginEnd={2}/>Register
              </Button>
              <p>Have an account? <Link to="/auth/login">Login</Link></p>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;