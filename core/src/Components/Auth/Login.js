import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import api from '../../Api/api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/login/', {
                username: username,
                password: password
            });

            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('user', username);
            setErrorMessage('Login successful.');

        } catch (error) {
            setErrorMessage('Failed to login. Username or password is wrong.');
        }
    };

    return (
        <Container>
            {errorMessage && <p style={
                errorMessage[0].toString() === 'L' ?
                { color: 'green' } :
                { color: 'red' }
                }>{errorMessage}</p>}
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
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