import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Girl from '../../assets/Images/bonbon-girl-cooking-a-salad-but-dreaming-about-meat.png';
import Guy from '../../assets/Images/sammy-5.png';

const About = () => {
    return (
        <div>
            <Container className="mb-5 border-bottom">
                <Row className="d-flex p-2">
                    <Col>
                        <Card style={{ width: '18rem' }} className="mx-auto border-0">
                            <Card.Img src={Girl} style={{ width: '13rem' }}

                            />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="mx-auto border-0">
                            <Card.Img src={Guy} style={{ width: '13rem' }}

                            />
                        </Card>
                    </Col>
                </Row>

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