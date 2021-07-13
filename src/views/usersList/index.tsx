import React, { useEffect, useState, useContext } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { User } from '../../models/user';
import api from '../../services/api';
import { GlobalContext } from '../../context/AuthContext';

const UsersList = () => {

  const history = useHistory();
  const { currentUser } = useContext<any>(GlobalContext);
  const [users, setUsers] = useState<User[]>();

  function navigateToUserDetails(user: any) {
    history.push({
      pathname: '/userdetails',
      state: { user: user }
    });
  }

  function handleDelete(id: string | undefined) {
    api.delete(`users/${id}`, { headers: { authorization: currentUser.accessToken } })
      .then((res) => setUsers(users?.filter(user => user.id !== id)))
      .catch((err) => alert(err.message));
  }

  function loadUsers() {
    api.get('users', { headers: { authorization: currentUser.accessToken } })
      .then((res) => setUsers(res.data.users))
      .catch((err) => alert(err.message));
  }

  useEffect(() => {
    loadUsers();
  }, [])

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} onClick={() => navigateToUserDetails(user)}>
              <td style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
              }}>
                <p>{user.email}</p>
                <Button variant="danger" onClick={() => handleDelete(user?.id)}>excluir</Button>
              </td>
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
