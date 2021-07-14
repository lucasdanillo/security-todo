import React, { useContext, useState, forwardRef, useImperativeHandle, Dispatch, SetStateAction } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { GlobalContext } from '../context/AuthContext';
import api from '../services/api';

interface Props {
    isUpdating?: boolean
    refresh: boolean
    setRefresh: Dispatch<SetStateAction<any>>
}

const ModalComponent = forwardRef((props: Props, ref: any) => {

    const { isUpdating, setRefresh, refresh } = props;

    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => handleShow(),
        close: () => handleClose(),
        setValues: (title: string, description: string, id: string) => { setTitle(title); setDescription(description); setId(id) },
    }))

    const { currentUser } = useContext<any>(GlobalContext);

    const handleClose = () => {
        setTitle('');
        setDescription('');
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');

    const onSuccess = () => {
        setRefresh(!refresh);
        setTitle('');
        setDescription('');
        handleClose();
    }

    function handleSaveToDo() {
        api.post('todos', { title, description }, {
            headers: {
                authorization: currentUser?.accessToken
            }
        })
            .then(res => onSuccess())
            .catch(err => alert(err.response.data.message))
    }

    function handleUpdateToDo() {
        api.put(`todos/${id}`, { title, description }, {
            headers: {
                authorization: currentUser?.accessToken
            }
        })
            .then(res => onSuccess())
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    { 
                        !isUpdating ?
                        'Cadastro de nota'
                        : 'Atualização de nota'
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form style={{
                        width: '45%'
                    }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Título da Nota</Form.Label>
                            <Form.Control value={title} type="text" placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control value={description} type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                {
                    isUpdating ?
                        <Button variant="primary" onClick={handleUpdateToDo}>
                            Atualizar
                        </Button>
                        :
                        <Button variant="primary" onClick={handleSaveToDo}>
                            Salvar
                        </Button>
                }

            </Modal.Footer>
        </Modal>
    )
});

export default ModalComponent;