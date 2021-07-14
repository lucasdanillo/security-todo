import React, { Dispatch, SetStateAction, useContext, useRef } from 'react';
import ToDoCardComponet from './todoCard';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Modal from './modal';
import api from '../services/api';
import { GlobalContext } from '../context/AuthContext';

interface Todo {
    id: string;
    title: string;
    description: string;
}

interface TodosList {
    list: Todo[]
    refresh: boolean
    setRefresh: Dispatch<SetStateAction<any>>
    onDelete: (todo: Todo) => void
}

function TodoList(props: TodosList) {

    const modalRefCreate = useRef<any>();
    const modalRefUpdate = useRef<any>();

    const { currentUser } = useContext<any>(GlobalContext);

    function handleEditCard(todo: Todo) {
        modalRefUpdate.current.setValues(todo.title, todo.description, todo.id);
        modalRefUpdate.current.show();
    }

    function handleShowModal() {
        modalRefCreate.current.show();
    }

    return (

        <Card style={{ width: '40em' }}>
            <Card.Header style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h5>My todos</h5>
                <Button variant="primary" onClick={handleShowModal}>
                    Nova Nota
                </Button>
            </Card.Header>
            {
                props.list.length > 0 ?
                    <ListGroup variant="flush" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        {props.list.map((todo) => (
                            <ListGroupItem style={{ width: '22rem' }}>
                                <ToDoCardComponet
                                    id={todo.id}
                                    title={todo.title}
                                    text={todo.description}
                                    onEdit={() => handleEditCard(todo)}
                                    onDelete={() => props.onDelete(todo)}
                                />
                            </ListGroupItem>
                        ))}
                        <Modal
                            ref={modalRefUpdate}
                            isUpdating
                            refresh={props.refresh}
                            setRefresh={props.setRefresh}
                        />
                    </ListGroup>
                    :
                    <div style={{
                        padding: 20,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <h3>No notes found</h3>
                    </div>
            }
            <Modal ref={modalRefCreate} setRefresh={props.setRefresh} refresh={props.refresh} />
        </Card>
    );
}

export default TodoList;