import React from 'react';
import ToDoCardComponet from './todoCard';
import { ListGroup, ListGroupItem } from 'react-bootstrap'; 

interface Todo {
    id: string;
    title: string;
    text: string;
  }

interface TodosList {
    list: Todo[]
}

function TodoList(props: TodosList){

    function handleDeleteCard(id:string){
        console.log(id);
      }
    
      function handleEditCard(id:string){
        console.log(id);
      }

    return(
        <ListGroup variant="flush" style={{width: '90rem', alignItems: 'center', justifyContent: 'center'}}>
        {props.list.map((todo) => (
            <ListGroupItem style={{width: '22rem'}}>
                <ToDoCardComponet
                    id={todo.id}
                    title={todo.title}
                    text={todo.text}
                    onEdit={handleEditCard}
                    onDelete={handleDeleteCard}
                />
            </ListGroupItem>
        ))}
        </ListGroup>
    );
}

export default TodoList;