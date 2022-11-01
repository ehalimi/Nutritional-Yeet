import Card from 'react-bootstrap/Card';
import Goals from '../../assets/Images/fabulous-target.png';
import Track from '../../assets/Images/bonbon-bag-of-groceries.png';
import Weight from '../../assets/Images/measure.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const GraphicsSection = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img src={Goals} style={{ width: '13rem' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title margin="10px top">Set Your Goals</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img variant="top" src={Track} style={{ width: '11rem' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title>Track Your Nutrition</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img variant="top" src={Weight} style={{ margin: '87px' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title>Lose/Gain Weight</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </ Container>

        </ div>
    )
}
export default GraphicsSection;