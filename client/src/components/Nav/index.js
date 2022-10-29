import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
       
        <header>
            <nav>
            <div className="small-img"></div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        SignUp
                    </Link>
                </div>
            </nav>
            <div className="img"></div>
            <h1>
                Nutritional Yeet
            </h1>
            </ header>
       
    )
}
export default Nav;