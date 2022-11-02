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
            <Container className="mt-5 mb-5 border-bottom">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="mx-auto border-0">
                            <Card.Img src={Goals} style={{ width: '13rem' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title margin="10px top">Set Your Own Goals</Card.Title>
                                <Card.Text>
                                    With our app you can set goals yourself to help figure out whatever goals you may have.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className=" mx-auto border-0">
                            <Card.Img variant="top" src={Track} style={{ width: '11rem' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title>Track Your Food Intake</Card.Title>
                                <Card.Text>
                                    You can add food to your daily list to track your nutritional intake.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="mx-auto border-0">
                            <Card.Img variant="top" src={Weight} style={{ margin: '87px' }} className="mx-auto d-block"

                            />
                            <Card.Body>
                                <Card.Title>Calculate Calories</Card.Title>
                                <Card.Text>
                                    If keeping track of calories is your jam, Nutritional Yeet can help you.
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