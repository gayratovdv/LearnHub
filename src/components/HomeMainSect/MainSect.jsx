import React from "react";
import Container from "../Container/Container";
import "./homesect.css";

const MainSect = () => {
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
          <button>Browse Courses</button>
        </div>
      </div>
    </Container>
  );
};

export default MainSect;
