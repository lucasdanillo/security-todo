import { Nav, Navbar } from "react-bootstrap";

const NavbarComponent = (props: any) => {

    const { isAdmin } = props;

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">To do</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/todos">Seila</Nav.Link>
                    {
                        isAdmin ?
                            <Nav.Link href="/users">Users</Nav.Link>
                            : <></> 
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;