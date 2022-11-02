import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/Images/fabulous-radish.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// import './Nav.css';

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
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/Signup">SignUp</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <Image src={logo}
                width="180"
                height="60"
                className="mt-5 mx-auto d-block"
                alt=""

            />
            <h1 className="text-center" >
                Nutritional Yeet
            </h1>

            <div style={{ width: '20rem' }} className=" mt-5 mx-auto input-group ">
                <input type="search" className="form-control rounded" placeholder="Search for any food product" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-primary">Search</button>
            </div>

        </>
    )
}
export default Navigation;