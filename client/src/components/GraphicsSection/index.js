import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Goals from '../../assets/Images/bonbon-bag-of-groceries.png';
import Computer from '../../assets/Images/desktop_computer.png';

const GraphicsSection = () => {
    return (
        <>
        <Container>
            <Row>
                <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Goals} />
                    <Card.Body>
                        <Card.Title>Set Your Goals!</Card.Title>
                        <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate
                        commodi.
                        </Card.Text>
                    </Card.Body>
            </Card>
                </Col>
                <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Goals} />
                    <Card.Body>
                        <Card.Title>Track Your Nutrition!</Card.Title>
                        <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate
                        commodi.
                        </Card.Text>
                    </Card.Body>
            </Card>
                </Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Goals} />
                    <Card.Body>
                        <Card.Title>Lose/Gain Weight!</Card.Title>
                        <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate
                        commodi.
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Row>
            <Row>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Computer} />
                    <Card.Body>
                        <Card.Title>Tracking Your Nutrition!</Card.Title>
                        <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate
                        commodi.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Row>
        </Container>
        </>
    )
}
export default GraphicsSection;