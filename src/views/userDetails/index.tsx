import React, { useEffect, useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import TodoList from '../../components/todoList';

interface Todo {
    id: string;
    title: string;
    text: string;
}

const UserDetails = (props: any) => {

    var staticTodoList = [
        { id: '1', title: 'Nota 1', text: 'Descrição 1' },
        { id: '2', title: 'Nota 2', text: 'Descrição 2' },
        { id: '3', title: 'Nota 3', text: 'Descrição 3' }]

    const user = props.location.state.user;

    const [todoList, setTodoList] = useState<Todo[]>([]);

    const history = useHistory();

    function handleDeleteCard(id: string) {
        console.log(id);
    }

    function handleEditCard(id: string) {
        console.log(id);
    }

    useEffect(() => {
        setTodoList(staticTodoList);
    }, []);

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
            <TodoList list={todoList} />
            <Button variant="primary" type="button" onClick={() => history.goBack()} >
                Voltar
            </Button>
        </Container>
    );
}

export default UserDetails;
