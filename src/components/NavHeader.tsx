import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container"
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavHeader = () : JSX.Element => {
  const { user, setUser } = useAuth();
  const logout = (): void => {
    localStorage.removeItem('auth.user');
    setUser(null);
  }
  return (
    <Navbar bg="light" expand="lg" className="border-bottom shadow-sm">
      <Container>
        <Link to="/" className="navbar-brand">React Template</Link>
        <Navbar.Toggle aria-controls="sidebar" />
        <Navbar.Offcanvas
          id="sidebar"
          aria-labelledby="sidebar-label"
          placement="end"
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {user ? (
                <>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ): (
                <>
                  <Link to="/auth/login" className="nav-link">Login</Link>
                  <Link to="/auth/register" className="nav-link">Register</Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
