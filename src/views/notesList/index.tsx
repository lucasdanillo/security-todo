import React from 'react';
import ToDoCardComponet from '../../components/todoCard';

function NotesList() {

  function handleDeleteCard(id:string){
    console.log(id);
  }

  function handleEditCard(id:string){
    console.log(id);
  }

  return (
      <ToDoCardComponet
        id='1'
        title="Card Title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        onEdit={handleEditCard}
        onDelete={handleDeleteCard}
      />
  );
}

export default NotesList;
