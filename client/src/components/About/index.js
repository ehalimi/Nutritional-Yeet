import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import computer from '../../assets/Images/desktop_computer.png';

const About = () => {
    return (
        <div className="d-flex flex-row justify-content-center">
            <Container>
                <Row>
                    <Col>
                        <Image src={computer}
                            width="600px"
                            height="600px"
                            className="mx-auto d-block"
                            alt=""

                        />
                    </Col>
                </Row>
            </Container>

            <Container className="align-center">
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;