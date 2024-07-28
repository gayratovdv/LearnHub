import React from "react";
import Course from "../../components/Course/Course";
import Category from "../../components/Category/Category";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";

import english from "../../Assets/english course image.jpg";
import frontEnd from "../../Assets/fron_end.jpg";
import backEnd from "../../Assets/back_end.png";
import motion from "../../Assets/pro motion course image.jpg";
import threeD from "../../Assets/3D_design.webp";
import UIUX from "../../Assets/UIUX_design.webp";
import tester from "../../Assets/tester_course.jpg";
import chess from "../../Assets/chess_course.jpg";
import "./catalog.scss";
import Footer from "../../components/Footer/Footer";

const Catalog = () => {
  let priceInputs = document.getElementsByClassName("price-inp");
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

  return (
    <main>
      <Navbar />
      <section className="top">
        <Container>
          <div className="top-side">
            <div className="price-container">
              <input
                min={1}
                style={{ width: "90px" }}
                onChange={lengthFunc}
                type="number"
                className="price-inp"
              />
              -
              <input
                min={1}
                style={{ width: "90px" }}
                onChange={lengthFunc}
                type="number"
                className="price-inp"
              />
            </div>
            <div className="search-container">
              <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input type="text" className="search-inp" />
            </div>
            <div className="discounts">
              <i class="fa-solid fa-tags fa-2xl" style={{ color: "red" }}></i>
              <h2 className="discount" style={{ color: "green" }}>
                50%
              </h2>
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
            
            <Course
              search={english}
              title="Ingliz tili kursi"
              subtitle="Bu kursda siz o'zingizning ingliz tilingizni darajasini A1ga tushirasiz."
              price={300}
            />
            <Course
              search={frontEnd}
              title="Front-end kursi"
              subtitle="Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz."
              price={600}
            />
            <Course
              search={backEnd}
              title="Back-end kursi"
              subtitle="Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz."
              price={900}
            />
            <Course
              search={motion}
              title="Motion dizayn kursi"
              subtitle="Bu kursda siz motion dizaynning asoslariga o'rganmisiz."
              price={500}
            />
            <Course
              search={threeD}
              title="3D dizayn kursi"
              subtitle="Bu kursda siz blenderda kubni o'chirishga o'rganasiz."
              price={500}
            />
            <Course
              search={UIUX}
              title="UIUX dizayn kursi"
              subtitle="Bu kursda siz saytlarning dizaynini qilishga o'rganib bizni hakaton guruhimizda dizayner bo'lasiz."
              price={300}
            />
            <Course
              search={tester}
              title="Tester kursi"
              subtitle="Bu kursda siz saytlarni xatolarga tekshirishni o'rganasiz."
              price={400}
            />
            <Course
              search={chess}
              title="Shaxmat kursi"
              subtitle="Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz."
              price={100}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Catalog;
