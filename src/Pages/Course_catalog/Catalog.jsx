import React, { useRef, useState } from "react";
import Course from "../../components/Course/Course";
import Category from "../../components/Category/Category";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import english from "../../Assets/english course image.jpg";
import frontEnd from "../../Assets/fron_end.jpg";
import backEnd from "../../Assets/back_end.png";
import motion from "../../Assets/pro motion course image.jpg";
import threeD from "../../Assets/3D_design.webp";
import UIUX from "../../Assets/UIUX_design.webp";
import tester from "../../Assets/tester_course.jpg";
import chess from "../../Assets/chess_course.jpg";
import "./catalog.scss";

const Catalog = () => {
  const courses = [
    { 
      id: 1, 
      image: english, 
      title: 'Ingliz tili kursi', 
      subtitle: "Bu kursda siz o'zingizning ingliz tilingizni darajasini pre-A1ga tushirasiz.", 
      price: 300,
      category: "other",
    },
    { 
      id: 2, 
      image: frontEnd, 
      title: 'Front-end kursi', 
      subtitle: "Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.", 
      price: 600,
      category: "programming",
    },
    { 
      id: 3, 
      image: backEnd, 
      title: 'Back-end kursi', 
      subtitle: "Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz.", 
      price: 900,
      category: "programming",
    },
    { 
      id: 4, 
      image: motion, 
      title: 'Motion dizayn kursi', 
      subtitle: "Bu kursda siz motion dizaynning asoslariga o'rganmisiz.", 
      price: 500,
      category: "design",
    },
    { 
      id: 5, 
      image: threeD, 
      title: '3D dizayn kursi', 
      subtitle: "Bu kursda siz blenderda kubni o'chirishga o'rganasiz.", 
      price: 500,
      category: "design",
    },
    { 
      id: 6, 
      image: UIUX, 
      title: "UIUX dizayn kursi", 
      subtitle: "Bu kursda siz saytlarning dizaynini qilishga o'rganib bizni hakaton guruhimizda dizayner bo'lasiz.", 
      price: 300,
      category: "design",
    },
    { 
      id: 7, 
      image: tester, 
      title: "Tester kursi", 
      subtitle: "Bu kursda siz programistlarni o'zingizni topgan buglaringiz bilan zaybal qivorasiz.",
      price: 400,
      category: "other",
    },
    { 
      id: 8, 
      image: chess, 
      title: "Shaxmat kursi", 
      subtitle: "Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz.", 
      price: 100,
      category: "other",
    },
  ];
  const [query, setQuery] = useState('');
  let [category, setCategory] = useState("")
  
  const searchFunc = (e) => {
    setQuery(e.target.value);
  };

  
  let filterFunc = (course) => {
    if (category.toLowerCase().includes(course.category)){
      return course.title.toLowerCase().includes(query.toLowerCase())
    }
    return(
      course.title.toLowerCase().includes(query.toLowerCase())
    )
    }

  const filteredCourses = courses.filter(filterFunc);

  return (
    <main>
      <Navbar />
      <section className="top-side">
        <Container>
          <div className="top">
            <div className="search-container">
              <input type="text" onChange={searchFunc} className='search-inp' />  
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
            </div>
            <div className="top-side__buttons">
              <input type="checkbox" />
              <label>Tekin kurslar</label>
            </div>
            <div className="discounts">
              <i className="fa-solid fa-tags fa-2xl" style={{ color: "red" }}></i>
              <h2 className='discount' style={{ color: "white" }}>50%</h2>
            </div>
          </div>
        </Container>
      </section>
      <section className="main-sect">
        <div className="categories">
          <Category onClick={() => {
            if (category.includes("programming")) console.log(category);
            else{
              setCategory(category + " programming")
              console.log(category)
              
            }
          }} title="Dasturlash"/>
          <Category onClick={() => {
            if (category.includes("design")) console.log(category);
            else{
              setCategory(category + " design")
              console.log(category);
            }
          }} title="Dizayn" />
          <Category onClick={() => {
            if (category.includes("other")) console.log(category);
            else{
              setCategory(category + " other")
              console.log(category);
            }
          }} title="Boshqa" />
        </div>
        <div className="main-container">
          <h1 className="main-title">Bizning kurslarimiz</h1>
          <div className="courses">
            {filteredCourses.map(course => (
              <Course
                key={course.id}
                search={course.image}
                title={course.title}
                subtitle={course.subtitle}
                price={course.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Catalog;