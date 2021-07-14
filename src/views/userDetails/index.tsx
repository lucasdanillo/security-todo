import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserRole } from '../../models/user';

const UserDetails = (props: any) => {

    const user = props.location.state.user;

    const history = useHistory();

    return (
        <Container style={{
            marginTop: 20
        }}>
            <Button variant="link" type="button" onClick={() => history.goBack()} >
                Voltar
            </Button>
            <Card>
                <Card.Body>
                    <Card.Title>User details</Card.Title>
                    <Card.Text>
                        <p>
                            First name: {user.firstName} <br />
                            Last name: {user.lastName} <br />
                            Email: {user.email} <br />
                            Role: {UserRole[user.role]} <br />
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default UserDetails;
