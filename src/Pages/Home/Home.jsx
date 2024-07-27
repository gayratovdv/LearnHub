import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeMainSect from "../../components/HomeMainSect/MainSect";
import Container from "../../components/Container/Container";
import EnglishCourse from "../../Assets/english course image.jpg";
import ProgramCourse from "../../Assets/programming course image.png";
import ProMotionCourse from "../../Assets/pro motion course image.jpg";
import "./home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeMainSect />
      <section class="featured-courses">
        <Container>
          <h2>Eng Mashhur Kurslar</h2>
          <div class="course-cards">
            <div class="course-card">
              <img src={EnglishCourse} alt="Course 1" />
              <h3>English Course</h3>
              <p>Bu kursda siz ielts olaolasiz va ... .... ...</p>
              <button className="btn">Enroll Now</button>
            </div>
            <div class="course-card">
              <img src={ProgramCourse} alt="Course 2" />
              <h3>Programming Course</h3>
              <p>Bu kursda siz dasturlashda Middle darajasigacham chiqasiz</p>
              <button className="btn">Enroll Now</button>
            </div>
            <div class="course-card">
              <img src={ProMotionCourse} alt="Course 3" />
              <h3>Pro Motion Course</h3>
              <p>Bu kursda siz 0 dan Pro Motion Kursini o'rganasiz</p>
              <button className="btn">Enroll Now</button>
            </div>
          </div>
        </Container>
      </section>

      <section class="how-it-works">
        <Container>
          <h2>Qanday Ishlaydi</h2>
          <div class="steps">
            <div class="step">
              <i class="fa-regular fa-registered"></i>
              <h3>Ro'yxatdan o'ting va profil yarating</h3>
            </div>
            <div class="step">
              <i class="fa-solid fa-magnifying-glass"></i>
              <h3>Kurslarni qidiring va tanlang</h3>
            </div>
            <div class="step">
              <i class="fa-brands fa-readme"></i>
              <h3>O'qing va bilimlaringizni oshiring</h3>
            </div>
            <div class="step">
              <i class="fa-brands fa-get-pocket"></i>
              <h3>Sertifikatga ega bo'ling</h3>
            </div>
          </div>
        </Container>
      </section>

      <section class="testimonials">
        <Container>
          <h2>Talabalarimiz Nima Deyishadi</h2>
          <div class="testimonial-cards">
            <div class="testimonial-card">
              <p>
                "LearnHub platformasi juda ajoyib, bu yerda juda ko'p foydali
                kurslar bor."
              </p>
              <h3>John Doe</h3>
              <p>Pro Motion</p>
            </div>
            <div class="testimonial-card">
              <p>
                "O'qituvchilar juda malakali va kurslar qiziqarli. Tavsiya
                qilaman!"
              </p>
              <h3>Jane Smith</h3>
              <p>English</p>
            </div>
            <div class="testimonial-card">
              <p>"LearnHub orqali men yangi kasb o'rgandim. Rahmat!"</p>
              <h3>Mike Johnson</h3>
              <p>Programming</p>
            </div>
          </div>
        </Container>
      </section>

      <section class="call-to-action">
        <Container>
          <h2>O'qishni Boshlashga Tayyormisiz?</h2>
          <p>Bugun ro'yxatdan o'ting va yangi bilimlarga ega bo'ling.</p>
          <button class="btn">Ro'yxatdan o'tish</button>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
