import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; 

function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(){
    console.log(email);
    console.log(password);
  }

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <Form onSubmit={handleSignUp} style={{
        width: '45%'
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control type="email" placeholder="User" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handleSignUp()} style={{ marginTop: '1rem'}}>
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
