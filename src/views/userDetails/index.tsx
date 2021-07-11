import React, { useEffect } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import TodoList from '../../components/todoList';

const UserDetails = (props: any) => {

    const user = props.location.state.user;

    const history = useHistory();

    function handleDeleteCard(id: string) {
        console.log(id);
    }

    function handleEditCard(id: string) {
        console.log(id);
    }

    const todos = [{
        id: '1', title: 'Nota 1', text: 'Descrição 1'},
        { id: '2', title: 'Nota 2', text: 'Descrição 2' },
        { id: '3', title: 'Nota 3', text: 'Descrição 3' }]

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{user.firstName + ' ' + user.lastName}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            <TodoList list={todos} />
            <Button variant="primary" type="button" onClick={() => history.goBack()} >
                Voltar
            </Button>
        </Container>
    );
}

export default UserDetails;
