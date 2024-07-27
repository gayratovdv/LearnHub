import "./navbar.css";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="nav">
        <a href="#"><img src="./favicon.ico" alt="navbar logo" /></a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#course">Courses</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
