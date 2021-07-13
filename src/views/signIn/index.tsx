import { useContext, useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/AuthContext';
import api from '../../services/api';

function SignIn() {

  const history = useHistory();

  const { setCurrentUser } = useContext<any>(GlobalContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToSignUp() {
    history.push({
      pathname: '/signup',
    });
  }

  async function handleSignIn() {

    api.post('users/authentication', {
      email,
      password
    }).then(res => {
      setCurrentUser(res.data.userPayload);
      history.push('/todos');
    })
    .catch(err => alert(err.message));
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
          <Form.Label>User</Form.Label>
          <Form.Control type="email" placeholder="User" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Row style={{justifyContent: 'space-between', padding: '1rem'}}>
          <Button variant="primary" type="button" onClick={handleSignIn} >
            Login
          </Button>
          <Button variant="light" type="button" onClick={() => navigateToSignUp()}>
            Sign Up
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default SignIn;
