import React, { useEffect, useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../context/AuthContext';
import TodoList from '../../components/todoList';
import api from '../../services/api';
import { Button, Container } from 'react-bootstrap';
import Modal from '../../components/modal';

interface Todo {
  id: string;
  title: string;
  description: string;
}

function NotesList() {

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);


  useEffect(() => {
    loadTodoList();
  }, [refresh])

  const { currentUser } = useContext<any>(GlobalContext);

  const loadTodoList = () => {
    api.get('users/todos', {
      headers: {
        authorization: currentUser?.accessToken
      }
    })
      .then(res => setTodoList(res.data.todos))
      .catch(err => alert(err.response.data.message));
  }

  function onDelete(todo: Todo) {
    api.delete(`todos/${todo.id}`, {
      headers: {
        authorization: currentUser?.accessToken
      }
    })
      .then(res => loadTodoList())
      .catch(err => alert(err));
  }

  useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1em'
    }}>
      <TodoList onDelete={onDelete} refresh={refresh} setRefresh={setRefresh} list={todoList} />
    </Container>
  );
}

export default NotesList;
