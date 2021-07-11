import React, { useEffect } from 'react';
import { Row, Button, Container, Card } from 'react-bootstrap';
import ToDoCardComponent from '../../components/todoCard';
import { useHistory, useLocation } from 'react-router-dom';

const UserDetails = (props: any) => {

    const location = useLocation();

    const user = props.location.state.user;

    const history = useHistory();

    function handleDeleteCard(id: string) {
        console.log(id);
    }

    function handleEditCard(id: string) {
        console.log(id);
    }

    const todos = [{ id: '1', title: 'Nota 1', text: 'Descrição 1' }, { id: '2', title: 'Nota 2', text: 'Descrição 2' }, { id: '3', title: 'Nota 3', text: 'Descrição 3' }]

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{user.firstName+' '+user.lastName}</Card.Title>
                    <Card.Text>
                        {user.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Row>
                {todos.map((todo) => (
                    <ToDoCardComponent
                        id={todo.id}
                        title={todo.title}
                        text={todo.text}
                        onEdit={handleEditCard}
                        onDelete={handleDeleteCard}
                    />
                ))}
            </Row>
            <Button variant="primary" type="button" onClick={() => history.goBack()}>
                Voltar
            </Button>
        </Container>
    );
}

export default UserDetails;
