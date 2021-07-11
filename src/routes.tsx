import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './views/signIn';
import NotesList from './views/notesList';
import UsersList from './views/usersList';
import UserDetails from './views/userDetails';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" />
                <Route path="/users" component={UsersList} />
                <Route path="/todos" component={NotesList} /> 
                <Route path='/userdetails' component={UserDetails} />
            </Switch>
        </BrowserRouter>
    );
}