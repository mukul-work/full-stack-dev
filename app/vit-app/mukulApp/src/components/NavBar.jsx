import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/About">About us</Link>
            <Link to="/details/1">Student 1</Link>
            <Link to="/details/2">Student 2</Link>
        </nav>
    );
}

export default Navbar;