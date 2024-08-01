import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeMainSect from "../../components/HomeMainSect/MainSect";
import Container from "../../components/Container/Container";
import EnglishCourse from "../../Assets/english course image.jpg";
import ProgramCourse from "../../Assets/programming course image.png";
import ProMotionCourse from "../../Assets/pro motion course image.jpg";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";


import english from "../../Assets/english course image.jpg";
import frontEnd from "../../Assets/fron_end.jpg";
import backEnd from "../../Assets/back_end.png";
import motion from "../../Assets/pro motion course image.jpg";
import threeD from "../../Assets/3D_design.webp";
import UIUX from "../../Assets/UIUX_design.webp";
import tester from "../../Assets/tester_course.jpg";
import chess from "../../Assets/chess_course.jpg";

const Home = () => {

  let discount = 5
  const courses = [
    {
      id: 1,
      search: english,
      title: 'Ingliz tili kursi',
      subtitle: "Bu kursda siz o'zingizning ingliz tilingizni darajasini pre-A1ga tushirasiz.",
      price: 0,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 2,
      search: frontEnd,
      title: 'Front-end kursi',
      subtitle: "Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.",
      price: 600,
      category: "programming",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 3,
      image: backEnd,
      title: 'Back-end kursi',
      subtitle: "Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz.",
      price: 0,
      category: "programming",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 4,
      search: motion,
      title: 'Motion dizayn kursi',
      subtitle: "Bu kursda siz motion dizaynning asoslariga o'rganmisiz.",
      price: 500,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 5,
      image: threeD,
      title: '3D dizayn kursi',
      subtitle: "Bu kursda siz blenderda kubni o'chirishga o'rganasiz.",
      price: 0,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 6,
      image: UIUX,
      title: "UIUX dizayn kursi",
      subtitle: "Bu kursda siz saytlarning dizaynini qilishga o'rganasiz.",
      price: 300,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 7,
      image: tester,
      title: "Tester kursi",
      subtitle: "Bu kursda siz saytlarda xatolarni tpishga o'rganasiz.",
      price: 0,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
    {
      id: 8,
      image: chess,
      title: "Shaxmat kursi",
      subtitle: "Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz.",
      price: 100,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount,
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quos eos numquam? Aut autem alias veritatis possimus doloribus necessitatibus, unde sequi vitae non ipsa pariatur voluptate officiis, quasi, aliquam ea! Saepe molestias, tenetur quidem maiores blanditiis praesentium reprehenderit doloribus incidunt veniam doloremque! Ex aut ea amet, assumenda ad quas dolores repudiandae et necessitatibus, libero rem voluptates modi, quae corporis tempora. Explicabo ab, illum aperiam repellat necessitatibus odit minus cum nemo deserunt fugiat, harum exercitationem placeat rerum tenetur sunt veritatis quisquam voluptatibus aut a rem quam laborum. Dicta quos eaque saepe!"
    },
  ];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].price >= 300) {
      courses[i].priceClass = courses[i].priceClass + " price-discounted"
      courses[i].discountClass = "discounted"
      courses[i].discount = courses[i].price - courses[i].price / (100 / discount)
    }
  }

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
              <h3>{courses[0].title}</h3>
              <p>{courses[0].subtitle}</p>
              <button className="btn"><Link to="/info_page" state={{propsCourse: courses[0]}}>Enroll Now</Link></button>
            </div>
            <div class="course-card">
              <img src={ProgramCourse} alt="Course 2" />
              <h3>{courses[1].title}</h3>
              <p>{courses[1].subtitle}</p>
              <button className="btn"><Link to="/info_page" state={{propsCourse: courses[1]}}>Enroll Now</Link></button>
            </div>
            <div class="course-card">
              <img src={ProMotionCourse} alt="Course 3" />
              <h3>{courses[3].title}</h3>
              <p>{courses[3].subtitle}</p>
              <button className="btn"><Link to="/info_page" state={{propsCourse: courses[3]}}>Enroll Now</Link></button>
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
