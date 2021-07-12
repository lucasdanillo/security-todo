import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; 
import { useHistory } from 'react-router-dom';
import { UserRole } from '../../models/user';
import api from '../../services/api';

function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSignUp(){
    api.post('users', {
      email,
      password,
      firstName,
      lastName,
      role: UserRole.ADMIN
    }).then(res => {
      alert(res.data.message);
      history.push('/signin');
    })
    .catch(err => console.log(err));
  }

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <Form style={{
        width: '45%'
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control type="email" placeholder="User" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => handleSignUp()} style={{ marginTop: '1rem'}}>
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
