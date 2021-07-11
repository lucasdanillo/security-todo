import React, { useEffect, useState } from 'react';
import TodoList from '../../components/todoList';

interface Todo {
  id: string;
  title: string;
  text: string;
}

function NotesList() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  var staticTodoList = [
    {
      id: '1',
      title: 'Card 01',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      id: '2',
      title: 'Card 02',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
    {
      id: '3',
      title: 'Card 03',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    },
  ]

  useEffect(() => {
    setTodoList(staticTodoList);
  }, []);

  return (
      <TodoList list={todoList}/>
  );
}

export default NotesList;
