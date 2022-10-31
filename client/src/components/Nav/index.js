import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/Images/fabulous-radish.png';

import './Nav.css';

const Navigation = () => {
    return (
        <>
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
            <Image src={logo}
                width="180"
                height="60"
                className="mx-auto d-block"
                alt=""

            />
            <h1 className="text-center" >
                Nutritional Yeet
            </h1>
        </>
    )
}
export default Navigation;