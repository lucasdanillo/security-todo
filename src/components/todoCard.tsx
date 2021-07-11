import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';

interface Props {
    id: string;
    title: string;
    text: string;
    onEdit(id: string): void;
    onDelete(id: string): void;
}

function ToDoCardComponet(props: Props) {
  return (
      <Card style={{width: '20rem'}}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Row style={{justifyContent: 'space-between', alignItems: 'center', paddingLeft: 12, paddingRight: 12}}>
            <Button variant="danger" onClick={(e) => props.onDelete(props.id)}>Excluir</Button>
            <Button variant="success" onClick={(e) => props.onEdit(props.id)}>Editar</Button>
          </Row>
        </Card.Body>
      </Card>
  );
}

export default ToDoCardComponet;