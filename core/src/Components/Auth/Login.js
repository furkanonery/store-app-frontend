import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

function Login() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </Container>

    );
}

export default Login;