import React, { useContext, FunctionComponent } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SignIn from './views/signIn';
import SignUp from './views/signUp'
import NotesList from './views/notesList';
import UsersList from './views/usersList';
import UserDetails from './views/userDetails';
import { GlobalContext } from './context/AuthContext';
import { UserRole } from './models/user';
import Notfound from './views/NotFound';

export default function Routes() {

    const { currentUser } = useContext<any>(GlobalContext);

    const ProtectedRoute: FunctionComponent<any> = ({
        component: Component,
        ...rest
    }) => {

        return (
            <Route
                {...rest}
                render={(props) => {
                    return currentUser?.accessToken ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={"/signin"} />
                    );
                }}
            />
        );
    };

    const ProtectedAdminRoute: FunctionComponent<any> = ({
        component: Component,
        ...rest
    }) => {

        return (
            <Route
                {...rest}
                render={(props) => {
                    return currentUser?.accessToken && currentUser?.role === UserRole.ADMIN ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={"/todos"} />
                    );
                }}
            />
        );
    };

    return (
        <BrowserRouter>
            {currentUser?.accessToken ? <Navbar isAdmin={currentUser?.role === UserRole.ADMIN} /> : <></>}
            <Switch>
                <Route exact path="/" component={NotesList} />
                {
                    !currentUser?.accessToken &&
                    <>
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                    </>
                }
                
                <ProtectedRoute path="/todos" component={NotesList} />
                <ProtectedAdminRoute path="/users" component={UsersList} />
                <ProtectedAdminRoute path='/userdetails' component={UserDetails} />
                {
                    currentUser?.accessToken ? 
                        <Redirect to="/todos" />
                        :
                        <Redirect to="/signin" />
                }
                
            </Switch>
        </BrowserRouter>
    );
}

