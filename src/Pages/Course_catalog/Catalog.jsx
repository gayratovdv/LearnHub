import React, { useRef, useState } from "react";
import Course from "../../components/Course/Course";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { json } from "react-router-dom";
import "./catalog.scss";

const Catalog = (props) => {
  let discount = props.discount
  let courses = props.courses

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
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input type="text" onChange={searchFunc} className='search-inp' />
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
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                price={course.price}
                priceClass={course.priceClass}
                discount={course.discount}
                discountClass={course.discountClass}
                info={course.info}
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