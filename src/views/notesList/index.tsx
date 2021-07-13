import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../context/AuthContext';
import TodoList from '../../components/todoList';
import api from '../../services/api';

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

  useEffect(() => {
    loadTodoList();
  }, []);

  return (
      <TodoList list={todoList}/>
  );
}

export default NotesList;
