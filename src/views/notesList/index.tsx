import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../context/AuthContext';
import TodoList from '../../components/todoList';
import api from '../../services/api';
import { Button, Modal, Form, Container } from 'react-bootstrap';


interface Todo {
  id: string;
  title: string;
  text: string;
}

function NotesList() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const { currentUser } = useContext<any>(GlobalContext);

  const loadTodoList = () => {
    api.get('users/todos', { headers: {
      authorization: currentUser.accessToken
    } })
    .then(res => setTodoList(res.data.todos))
    .catch(err => alert(err.message));
  }
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSaveToDo() {
    console.log(titulo);
    console.log(descricao);
    console.log(data);
    setShow(false);
  }

  useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <div>
      <TodoList list={todoList} />
      <Button variant="primary" onClick={handleShow}>
        Nova Nota
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form style={{
              width: '45%'
            }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título da Nota</Form.Label>
                <Form.Control type="text" placeholder="Título" onChange={(e) => setTitulo(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Descrição</Form.Label>
                <Form.Control type="text" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Data</Form.Label>
                <Form.Control type="text" placeholder="Data" onChange={(e) => setData(e.target.value)} />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSaveToDo}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotesList;
