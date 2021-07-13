import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const UserDetails = (props: any) => {

    const user = props.location.state.user;

    const history = useHistory();

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
            <Button variant="primary" type="button" onClick={() => history.goBack()} >
                Voltar
            </Button>
        </Container>
    );
}

export default UserDetails;
