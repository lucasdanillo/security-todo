import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavbarComponent = (props: any) => {

    const { isAdmin } = props;
    const history = useHistory();

    const navigateTo = (route: string) => {
        history.push(route);
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand onClick={() => navigateTo('/')}>To do</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => navigateTo('/todos')}>
                            My todos
                    </Nav.Link>
                    {
                        isAdmin ?
                            <Nav.Link onClick={() => navigateTo('/users')}>
                                    Users
                            </Nav.Link>
                            : <></> 
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;