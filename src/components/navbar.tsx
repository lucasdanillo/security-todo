import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { clear } from "../utils/localStorageService";

const NavbarComponent = (props: any) => {

    const { isAdmin } = props;
    const history = useHistory();

    const [active, setActive] = useState(0);

    const navigateTo = (route: string) => {
        history.push(route);
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand onClick={() => navigateTo('/')}>To do</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link active={active === 0} onClick={() => {
                        navigateTo('/todos');
                        setActive(0);
                    }}>
                            My todos
                    </Nav.Link>
                    {
                        isAdmin ?
                            <Nav.Link active={active === 1} onClick={() => {
                                navigateTo('/users');
                                setActive(1);
                            }}>
                                    Users
                            </Nav.Link>
                            : <></> 
                    }
                </Nav>
                <Nav>
                    <Nav.Link active onClick={() => { clear(); window.location.reload() }}>
                            Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;