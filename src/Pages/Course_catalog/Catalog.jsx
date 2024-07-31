import React, { useRef, useState } from "react";
import Course from "../../components/Course/Course";
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

import Info_page_1 from "../course_info_pages/Info_page_1.jsx";
import Info_page_2 from "../course_info_pages/info_page_2.jsx";
import Info_page_3 from "../course_info_pages/Info_page_3.jsx";
import Info_page_4 from "../course_info_pages/Info_page_4.jsx";
import Info_page_5 from "../course_info_pages/info_page_5.jsx";
import Info_page_6 from "../course_info_pages/Info_page_6.jsx";
import Info_page_7 from "../course_info_pages/Info_page_7.jsx";
import Info_page_8 from "../course_info_pages/Info_page_8.jsx";

import { json } from "react-router-dom";
import "./catalog.scss";

const Catalog = () => {
  let discount = 5
  const courses = [
    {
      id: 1,
      image: english,
      title: 'Ingliz tili kursi',
      subtitle: "Bu kursda siz o'zingizning ingliz tilingizni darajasini pre-A1ga tushirasiz.",
      price: 0,
      category: "other",
      priceClass: "price",
      discountClass: "discount",
      discount
    },
    {
      id: 2,
      image: frontEnd,
      title: 'Front-end kursi',
      subtitle: "Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.",
      price: 600,
      category: "programming",
      priceClass: "price",
      discountClass: "discount",
      discount
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
      discount
    },
    {
      id: 4,
      image: motion,
      title: 'Motion dizayn kursi',
      subtitle: "Bu kursda siz motion dizaynning asoslariga o'rganmisiz.",
      price: 500,
      category: "design",
      priceClass: "price",
      discountClass: "discount",
      discount
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
      discount
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
      discount
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
      discount
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
      discount
    },
  ];


  for (let i = 0; i < courses.length; i++) {
    if (courses[i].price >= 300) {
      courses[i].priceClass = courses[i].priceClass + " price-discounted"
      courses[i].discountClass = "discounted"
      courses[i].discount = courses[i].price - courses[i].price / (100 / discount)
    }
  }
  
  console.log(Info_page_1().props.title)


  const [query, setQuery] = useState('');
  let [category, setCategory] = useState("")
  let [checkbox, setCheckbox] = useState(false)

  let categories = document.getElementsByClassName("category")
  let circles = document.getElementsByClassName("category-circle")

  const searchFunc = (e) => {
    setQuery(e.target.value);
  };

  let filterFunc = (course) => {
    if (checkbox) {
      if (category.includes("programming") || category.includes("design") || category.includes("other")) {
        return category.toLowerCase().includes(course.category) && course.title.toLowerCase().includes(query.toLowerCase()) && course.price == 0
      }
      return course.title.toLowerCase().includes(query.toLowerCase()) && course.price == 0
    }
    else if (category.includes("programming") || category.includes("design") || category.includes("other")) {
      return category.toLowerCase().includes(course.category) && course.title.toLowerCase().includes(query.toLowerCase())
    }
    return course.title.toLowerCase().includes(query.toLowerCase())
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
              <input type="checkbox" onChange={() => {
                if (checkbox == false) setCheckbox(true)
                else setCheckbox(false)
              }} />
              <label>Tekin kurslar</label>
            </div>
            <div className="discounts">
              <i className="fa-solid fa-tags fa-2xl" style={{ color: "red" }}></i>
              <h2 className='discount-title' style={{ color: "white" }}>{discount}%</h2>
            </div>
          </div>
        </Container>
      </section>
      <section className="main-sect">
        <div className="categories">
          <div onClick={() => {
            categories[0].style.background = "#bbb"
            circles[0].style.display = "flex"
            if (category.includes("programming")) console.log(category);
            else {
              setCategory(category + " programming")
              console.log(category)
            }
          }} className="category">
            <h3 className='category-title'>Dasturlash</h3>
            <div onClick={(e) => {
              e.stopPropagation();
              setCategory(category.replace("programming", "nothing"))
              categories[0].style.background = "#cecece"
              circles[0].style.display = "none"
              console.log(category);
            }} className="category-circle"><i class="fa-solid fa-xmark fa-2xs"></i></div>
          </div>
          <div onClick={() => {
            categories[1].style.background = "#bbb"
            circles[1].style.display = "flex"
            if (category.includes("design")) console.log(category);
            else {
              setCategory(category + " design")
              console.log(category);
            }
          }} className="category">
            <h3 className='category-title'>Dizayn</h3>
            <div onClick={(e) => {
              e.stopPropagation();
              setCategory(category.replace("design", "nothing"))
              categories[1].style.background = "#cecece"
              circles[1].style.display = "none"
            }} className="category-circle"><i class="fa-solid fa-xmark fa-2xs"></i></div>
          </div>
          <div onClick={() => {
            categories[2].style.background = "#bbb"
            circles[2].style.display = "flex"
            if (category.includes("other")) console.log(category);
            else {
              setCategory(category + " other")
              console.log(category);
            }
          }} className="category">
            <h3 className='category-title'>Boshqa</h3>
            <div onClick={(e) => {
              e.stopPropagation();
              setCategory(category.replace("other", "nothing"))
              categories[2].style.background = "#cecece"
              circles[2].style.display = "none"
            }} className="category-circle"><i class="fa-solid fa-xmark fa-2xs"></i></div>
          </div>
        </div>
        <div className="main-container">
          <h1 className="main-title">Bizning kurslarimiz</h1>
          <div className="courses">
            {filteredCourses.map(course => (
              <Course
                id={course.id}
                search={course.image}
                title={course.title}
                subtitle={course.subtitle}
                price={course.price}
                priceClass={course.priceClass}
                discount={course.discount}
                discountClass={course.discountClass}
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