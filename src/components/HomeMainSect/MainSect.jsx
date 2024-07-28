import React from "react";
import Container from "../Container/Container";
import "./homesect.css";
import { Link } from "react-router-dom";

const MainSect = ({ currentUser }) => {

  return (
    <Container>
      <div className="main-sec">
        <div class="main-sec-left">
          <h1>O'qing, O'rgating va Rivojlaning</h1>
          <p>
            Dunyodagi eng yaxshi o'qituvchilar va kurslar bilan yangi bilimlarga
            ega bo'ling.
          </p>
          <button>Get Started</button>
          <button><Link to="/course_catalog">Browse Courses</Link></button>
        </div>
      </div>
    </Container>
  );
};

export default MainSect;
