import React from "react";
import "./footer.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <div className="footer__content">
            <div className="footer__content--left">
              <h2>Online Learning Platform</h2>
              <h4>Chilonzor Qutbiniso, Uzbekistan</h4>
              <div className="footer__content--left-content">
                <i class="fa-brands fa-whatsapp"></i>
                <p>+998 99 728 86 75</p>
              </div>
              <div className="footer__content--left-content">
                <i class="fa-brands fa-telegram"></i>
                <p>learnhub@gmail.com</p>
              </div>
            </div>
            <div className="footer__content--right">
              <div>
                <h2>Sevices</h2>
                <p>Ways of Working</p>
                <p>Ideas & Innavation</p>
                <p>Intiatives</p>
                <p>
                  Values & Impact <br /> Creation
                </p>
                <p>The Simple Framework</p>
              </div>
              <div>
                <h2>Quick Links</h2>
                <p>About Us</p>
                <p>Our Services</p>
                <p>90 Days Experiment</p>
                <p>Learn a thons</p>
              </div>
              <div>
                <h2>Privacy & Info</h2>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Get in Touch</p>
                <p>Become a Partner</p>
              </div>
              <div className="footer__content--right-wrapper">
                <h2>Follow Us</h2>
                <p>
                  <i class="fa-brands fa-facebook"></i>
                  <Link to="https://www.facebook.com/" target="_blank">
                    Facebook
                  </Link>
                </p>
                <p>
                  <i class="fa-brands fa-linkedin"></i>
                  <Link to="https://www.linkedin.com/" target="_blank">
                    Linkedin
                  </Link>
                </p>
                <p>
                  <i class="fa-brands fa-twitter"></i>
                  <Link to="https://www.twitter.com/" target="_blank">
                    Twitter
                  </Link>
                </p>
                <p>
                  <i class="fa-brands fa-instagram"></i>
                  <Link to="https://www.instagram.com/" target="_blank">
                    Instagram
                  </Link>
                </p>
                <p>
                  <i class="fa-brands fa-youtube"></i>
                  <Link to="https://www.youtube.com/" target="_blank">
                    Youtube
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="footer__wrapper">
            <div className="logo--wrapper">
              <img src="./favicon.ico" alt="logo" />
              <p>Simple is Powerful</p>
            </div>
            <div className="copyright__wrapper">
              <p>&copy; 2024 <span>learnhub.</span> All Rights Reserved </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
