import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <header className="header-bkg-img">
            <nav>
                <div className="diamond-container">
                    <div className="diamond-shield">
                    </div>
                </div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        SignUp
                    </Link>
                </div>
            </nav>
            <h1>
                Nutritional Yeet
            </h1>
        </header>
    )
}
export default Nav;