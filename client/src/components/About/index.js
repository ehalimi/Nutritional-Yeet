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
                            Have you ever wanted to plan your daily meals in a knowledgeable and healthy manner? Isn't it annoying looking at that slice of cauliflower crust pizza and thinking "but is it healthy tho????"
                            Well, Nutritional Yeet aims to help you with these make-or-break decisions you come across on a daily basis! Our app can help track your food intake by calculating caloric intake with each meal as well
                            as letting you set your own goals on what it is that you want to accomplish on this journey to fun and healthy eating. Join us on this quest to become happy, knowledgeable and inspired!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;