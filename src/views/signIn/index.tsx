import { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SignIn() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigateToSignUp() {
    history.push({
      pathname: '/signup',
    });
  }

  async function handleSignIn() {

    if (password === '1') {
      history.push('/users');
    }
    else {
      history.push('/todos');
    }

    //   const dados = {
    //     email: email,
    //     senha: password,
    //   }

    //   const dadosCrypto = CryptoJS.AES.encrypt(JSON.stringify(dados), "secret", {}).toString();

    //   try {
    //     const data = await req(
    //       `
    //         mutation{
    //           loginAdmin(
    //             data: "${dadosCrypto}"
    //           ){
    //             accessToken
    //             refreshToken
    //           }
    //         }
    //       `
    //       , true)
    //     if (data.data) {
    //       dispatch(Auth(data.data.loginAdmin || { accessToken: "", refreshToken: "" }));
    //       setLoading(false);
    //       navigate('/produtos');
    //     } else if (data.errors) {
    //       toast.error(data.errors[0].message);
    //     }
    //   } catch (err) {
    //     alert(err);
    //   }
    //   setLoading(false)
    // }
    
  }

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <Form onSubmit={handleSignIn} style={{
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
          <Button variant="primary" type="submit" >
            Login
          </Button>
          <Button variant="light" type="submit" onClick={() => navigateToSignUp()}>
            Sign Up
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default SignIn;
