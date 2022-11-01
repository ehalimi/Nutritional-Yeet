import Nav from '../components/Nav';
import GraphicsSection from '../components/GraphicsSection';
import Footer from '../components/Footer';
import About from '../components/About';
import LoginForm from './Login';
import SignupForm from './Signup';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <GraphicsSection>
            </GraphicsSection>
            <About></About>
            <LoginForm></LoginForm>
            <SignupForm></SignupForm>
            <Footer></Footer>
        </div>
    )
}
export default Home;