import React from "react";
import "./footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
