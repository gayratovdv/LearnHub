import React from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './about.css'; // Stil uchun CSS fayli

const About = () => {
  const plusSlides = () => {
    // Slide o'zgartirish funktsiyasi
  };

  const currentSlide = () => {
    // Hozirgi slaydga o'tish funktsiyasi
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className="main-content">
          <div className="section-title"></div>

          <div className="section1">
            <h2>Our project and its advantages</h2>
            <div className="section1__top">
              <div className="section__left">
                <p>
                  Our project is about Mars It School educational <br />
                  center. Mars It School is one of the best training centers. <br />
                  Mars It School are taught by qualified teachers.
                </p>
              </div>
              <div className="section__right">
                <div className="card-swiper">
                  <div className="card-groups">
                    <div className="card-group" data-index="0" data-status="active">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                    <div className="card-group" data-index="1" data-status="unknown">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                    <div className="card-group" data-index="2" data-status="unknown">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section1__bottom">
              <div className="section__left">
                <div className="card-swiper">
                  <div className="card-groups">
                    <div className="card-group" data-index="0" data-status="active">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                    <div className="card-group" data-index="1" data-status="unknown">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                    <div className="card-group" data-index="2" data-status="unknown">
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                      <div className="little-card card"></div>
                      <div className="big-card card"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section__right">
                <p>
                  Mars It School has many advantages. One of <br />
                  these is coins. Readers are rewarded with coins <br />
                  for their knowledge.
                </p>
              </div>
            </div>
          </div>

          <div className="section3">
            <h2>Our team</h2>
            <div className="wrapper">
              <div className="wrapper__cards">
                <input className='input' type="radio" name="slide" id="c1" defaultChecked />
                <label htmlFor="c1" className="wrapper__card">
                  <div className="row">
                    <div className="icon">1</div>
                    <div className="description">
                      <h4>Winter</h4>
                      <p>Winter has so much to offer - creative activities</p>
                    </div>
                  </div>
                </label>

                <input className='input' type="radio" name="slide" id="c2" />
                <label htmlFor="c2" className="wrapper__card">
                  <div className="row">
                    <div className="icon">2</div>
                    <div className="description">
                      <h4>Digital Technology</h4>
                      <p>Gets better every day - stay tuned</p>
                    </div>
                  </div>
                </label>

                <input className='input' type="radio" name="slide" id="c3" />
                <label htmlFor="c3" className="wrapper__card">
                  <div className="row">
                    <div className="icon">3</div>
                    <div className="description">
                      <h4>Globalization</h4>
                      <p>Help people all over the world</p>
                    </div>
                  </div>
                </label>

                <input className='input' type="radio" name="slide" id="c4" />
                <label htmlFor="c4" className="wrapper__card">
                  <div className="row">
                    <div className="icon">4</div>
                    <div className="description">
                      <h4>Winter</h4>
                      <p>Winter has so much to offer - creative activities</p>
                    </div>
                  </div>
                </label>

                <input className='input' type="radio" name="slide" id="c5" />
                <label htmlFor="c5" className="wrapper__card">
                  <div className="row">
                    <div className="icon">5</div>
                    <div className="description">
                      <h4>Winter</h4>
                      <p>Winter has so much to offer - creative activities</p>
                    </div>
                  </div>
                </label>
                <input className='input' type="radio" name="slide" id="c6" />
                <label htmlFor="c6" className="wrapper__card">
                  <div className="row">
                    <div className="icon">6</div>
                    <div className="description">
                      <h4>Winter</h4>
                      <p>Winter has so much to offer - creative activities</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;