// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/fabulous-radish.png';

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Container>
                    <Navbar.Brand href="#home">

                        <img
                            src={logo}
                            width="60"
                            height="25"
                            alt=""
                        />

                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Nav className="me-auto">
                    <Nav.Link href="#Login">Login</Nav.Link>
                    <Nav.Link href="#SignUp">SignUp</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer;