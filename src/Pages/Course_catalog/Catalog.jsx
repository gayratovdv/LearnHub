import React, { useState } from "react";
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
  let lengthFunc = () => {
    let priceInput1Length = priceInputs[0].value.length;
    let priceInput2Length = priceInputs[1].value.length;

    if (priceInput1Length > 4) {
      priceInputs[0].value = priceInputs[0].value.slice(0, -1);
      priceInputs[0].style.width = 90 + 12 * priceInputs[0].value.length + "px";
    } else {
      priceInputs[0].style.width = 90 + 12 * priceInput1Length + "px";
    }
    if (priceInput2Length > 4) {
      priceInputs[1].value = priceInputs[1].value.slice(0, -1);
      priceInputs[1].style.width = 90 + 12 * priceInputs[1].value.length + "px";
    } else {
      priceInputs[1].style.width = 90 + 12 * priceInput2Length + "px";
    }
  };

  const [query, setQuery] = useState('');
  const [firstRange, setFirstRange] = useState(0)
  
  const courses = [
    { 
      id: 1, 
      image: english, 
      title: 'Ingliz tili kursi', 
      subtitle: "Bu kursda siz o'zingizning ingliz tilingizni darajasini pre-A1ga tushirasiz.", 
      price: 300 

    },
    { 
      id: 2, 
      image: frontEnd, 
      title: 'Front-end kursi', 
      subtitle: "Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.", 
      price: 600 
      
    },
    { 
      id: 3, 
      image: backEnd, 
      title: 'Back-end kursi', 
      subtitle: "Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz.", 
      price: 900 
      
    },
    { 
      id: 4, 
      image: motion, 
      title: 'Motion dizayn kursi', 
      subtitle: "Bu kursda siz motion dizaynning asoslariga o'rganmisiz.", 
      price: 500 
      
    },
    { 
      id: 5, 
      image: threeD, 
      title: '3D dizayn kursi', 
      subtitle: "Bu kursda siz blenderda kubni o'chirishga o'rganasiz.", 
      price: 500 
      
    },
    { 
      id: 6, 
      image: UIUX, 
      title: "UIUX dizayn kursi", 
      subtitle: "Bu kursda siz saytlarning dizaynini qilishga o'rganib bizni hakaton guruhimizda dizayner bo'lasiz.", 
      price: 300
      
    },
    { 
      id: 7, 
      image: tester, 
      title: "Tester kursi", 
      subtitle: "Bu kursda siz programistlarni o'zingizni topgan buglaringiz bilan zaybal qivorasiz.", price: 400},
      { 
      id: 8, 
      image: chess, 
      title: "Shaxmat kursi", 
      subtitle: "Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz.", 
      price: 100
      
    },
  ];
  
  let priceInputs = document.getElementsByClassName("price-inp");
  const searchLengthFunc = (e) =>{
    lengthFunc()
    let initFunc = (e) =>{
      setFirstRange(e.target.value); 
    }
  }
  
  const searchFunc = (e) => {
    setQuery(e.target.value);
  };

  const filteredCourses = courses.filter(
    (course) => course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <Navbar />
      <section className="top-side">
        <Container>
          <div className="top">
            <div className="price-container">
              <input min={1} onChange={searchLengthFunc} style={{ width: "90px" }} type="number" className='price-inp' />
              -
              <input min={1} onChange={searchLengthFunc} style={{ width: "90px" }} type="number" className='price-inp' />
            </div>
            <div className="search-container">
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input type="text" onChange={searchFunc} className='search-inp' />
            </div>
            <div className="discounts">
              <i className="fa-solid fa-tags fa-2xl" style={{ color: "red" }}></i>
              <h2 className='discount' style={{ color: "green" }}>50%</h2>
            </div>
          </div>
        </Container>
      </section>
      <section className="main-sect">
        <div className="categories">
          <Category title="Dasturlash" />
          <Category title="Dizayn" />
          <Category title="Boshqa" />
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