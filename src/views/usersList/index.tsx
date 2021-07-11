import React, { useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const UsersList = () => {

  const history = useHistory();

  const users = [
    { id: '1', email: 'lucas@gmail.com', firstName: 'Lucas', lastName: 'Danillo' },
    { id: '2', email: 'gisele@gmail.com', firstName: 'Gisele', lastName: 'Ribeiro' },
    { id: '3', email: 'arthur@gmail.com', firstName: 'Arthur', lastName: 'Basílio' }];

  useEffect(() => { }) //requisição para buscar usuários

  function navigateToUserDetails(user: any) {
    history.push({
      pathname: '/userdetails',
      state: { user: user }
    });
  }

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => navigateToUserDetails(user)}>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" type="button" onClick={() => history.goBack()}>
        Logout
      </Button>
    </Container>
  );
}

export default UsersList;
