import React from 'react'
import "./catalog.scss"
import Course from '../../components(2)/Course/Course'

function Catalog() {
  return (
    <main>
      <section className="top-side">
        <div className="price-container">
          <input type="number" className='price-input'/>
          -
          <input type="number" className='price-input'/>
        </div>
        <div className="search-container">
          <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
          <div className="search-line"></div>
          <input type="text" className='search-input'/>
        </div>
        <div className="discounts">
          <h2 className='discount'></h2>
        </div>
      </section>
      <div className="line"></div>
      <section className="main-sect">
        <div className="categoryes">
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
          <div className="category">
            <h3 className='category-title'></h3>
            <div className="circle"></div>
          </div>
        </div>
        <div className="main-container">
          <h1 className='main-title'>Bizning kurslarimiz</h1>
          <div className="courses">
            <Course src="./images/chess-course.webp" title="Ingliz tili kursi" subtitle="Bu kursda siz o'zingizning ingliz tilingizni darajasini A1ga tushirasiz." price={300}/>
            <div className="course">
              <h4 className='course-title'>Front-end kursi</h4>
              <p className='course-subtitle'>Bu kursda siz dasturlashning Front-end qismini asoslariga o'rganasiz.</p>
              <h5 className='course-price'>600$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'>Back-end kursi</h4>
              <p className='course-subtitle'>Bu kursda siz dasturlashning Back-end qismini asoslariga o'rganasiz.</p>
              <h5 className='course-price'>900$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'>Motion dizayn kursi</h4>
              <p className='course-subtitle'>Bu kursda siz motion dizaynning asoslariga o'rganmisiz.</p>
              <h5 className='course-price'>500$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'>3D dizayn kursi</h4>
              <p className='course-subtitle'>Bu kursda siz blenderda kubni o'chirishga o'rganasiz</p>
              <h5 className='course-price'>500$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'>UIUX dizayning kursi</h4>
              <p className='course-subtitle'>Bu kursda siz saytlarning dizaynini qilishga o'rganib bizni hakaton guruhimizda dizayner bo'lasiz.</p>
              <h5 className='course-price'>300$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'>Shaxmat kursi</h4>
              <p className='course-subtitle'>Bu kursda siz shaxmat yosh razrad 2ga ko'tarasiz</p>
              <h5 className='course-price'>50$</h5>
            </div>
            <div className="course">
              <h4 className='course-title'></h4>
              <p className='course-subtitle'>Bu kursda siz o'zingizning ingliz tilingizni darajasini A1ga tushirasiz</p>
              <h5 className='course-price'>300$</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalog
