import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import api from '../../Api/api';

function Register() {

    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/register/', {
                first_name: first_name,
                last_name: last_name,
                username: username,
                password: password,
                password2: password2,
                email: email
            });

            setErrorMessage('Register successful.');

        } catch (error) {
            setErrorMessage('Failed to register.');
        }
    };

    return (
        <Container>
            {errorMessage && <p style={
                errorMessage[0].toString() === 'R' ?
                    { color: 'green' } :
                    { color: 'red' }
            }>{errorMessage}</p>}
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                        required
                        placeholder="Enter First Name"
                        value={first_name}
                        onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"
                        required
                        placeholder="Enter Last Name"
                        value={last_name}
                        onChange={(e) => setLastname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        required
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        required
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re Password</Form.Label>
                    <Form.Control type="password"
                        required
                        placeholder="Re Enter password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="text"
                        required
                        placeholder="Enter e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>

    );
}

export default Register;