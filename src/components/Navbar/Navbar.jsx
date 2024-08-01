import "./navbar.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="nav">
        <Link to="/"><img src="./favicon.ico" alt="navbar logo" /></Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/course_catalog">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="nav-content">
          <button className="nav-btn">Sign Up</button>
          <button className="nav-btn">Login</button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
