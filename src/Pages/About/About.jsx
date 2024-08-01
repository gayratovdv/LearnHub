// import React from 'react';
// import "./about.css";
// import Container from '../../components/Container/Container';
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer';


// const About = () => {
// return (
//   <div>
//     <Navbar />
//     <Container>
//       <div className="main-content">
//         <div className="section-title"></div>

//         <div className="section1">
//           <h2>Our project and its advantages</h2>
//           <div className="section1__top">
//             <div className="section__left">
//               <p>
//                 Our project is about Mars It School educational <br />
//                 center. Mars It School is one of the best training centers. <br />
//                 Mars It School are taught by qualified teachers.
//               </p>
//             </div>
//             <div className="section__right">
//               <div className="card-swiper">
//                 <div className="card-groups">
//                   <div className="card-group" data-index="0" data-status="active">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                   <div className="card-group" data-index="1" data-status="unknown">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                   <div className="card-group" data-index="2" data-status="unknown">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="section1__bottom">
//             <div className="section__left">
//               <div className="card-swiper">
//                 <div className="card-groups">
//                   <div className="card-group" data-index="0" data-status="active">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                   <div className="card-group" data-index="1" data-status="unknown">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                   <div className="card-group" data-index="2" data-status="unknown">
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                     <div className="little-card card"></div>
//                     <div className="big-card card"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="section__right">
//               <p>
//                 Mars It School has many advantages. One of <br />
//                 these is coins. Readers are rewarded with coins <br />
//                 for their knowledge.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="section2">
//           <h2>Purpose and Mission</h2>
//           <p>
//             The purpose of our creation of this project <br />
//             Development of IT direction in Uzbekistan and Uzbekistan <br />Introduction to the whole world in the direction of the IT.</p>

//             <div class="slideshow">
//               <div class="mySlides fade">
//                 <img src="data:image/jpeg;base64,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" style="width:100%" />
//               </div>
//               <div class="mySlides fade">
//                 <img src="data:image/jpeg;base64,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" style="width:100%" />
//               </div>
//               <div class="mySlides fade">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsUy5b__XFZjxQwP0pixPal4-DvSSViZAMrgakOGJWfWCXcIDOuu_MF_fhRsfb-XNY7U&usqp=CAU" style="width:100%" />
//               </div>

//               <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//               <a class="next" onclick="plusSlides(1)">&#10095;</a>
//             </div>
//             <br />

//             <div style={{textAlign:'center'}}>
//               <span class="dot" onclick="currentSlide(1)"></span>
//               <span class="dot" onclick="currentSlide(2)"></span>
//               <span class="dot" onclick="currentSlide(3)"></span>
//             </div>

//           </div>

//           <div className="section3">
//             <h2>Our team</h2>
//             <div className="wrapper">
//               <div className="wrapper__cards">
//                 <input type="radio" name="slide" id="c1" checked />
//                 <label htmlFor="c1" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">1</div>
//                     <div className="description">
//                       <h4>Winter</h4>
//                       <p>Winter has so much to offer - creative activities</p>
//                     </div>
//                   </div>
//                 </label>

//                 <input type="radio" name="slide" id="c2" />
//                 <label htmlFor="c2" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">2</div>
//                     <div className="description">
//                       <h4>Digital Technology</h4>
//                       <p>Gets better every day - stay tuned</p>
//                     </div>
//                   </div>
//                 </label>

//                 <input type="radio" name="slide" id="c3" />
//                 <label htmlFor="c3" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">3</div>
//                     <div className="description">
//                       <h4>Globalization</h4>
//                       <p>Help people all over the world</p>
//                     </div>
//                   </div>
//                 </label>

//                 <input type="radio" name="slide" id="c4" />
//                 <label htmlFor="c4" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">4</div>
//                     <div className="description">
//                       <h4>Winter</h4>
//                       <p>Winter has so much to offer - creative activities</p>
//                     </div>
//                   </div>
//                 </label>

//                 <input type="radio" name="slide" id="c5" />
//                 <label htmlFor="c5" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">5</div>
//                     <div className="description">
//                       <h4>Winter</h4>
//                       <p>Winter has so much to offer - creative activities</p>
//                     </div>
//                   </div>
//                 </label>

//                 <input type="radio" name="slide" id="c6" />
//                 <label htmlFor="c6" className="wrapper__card">
//                   <div className="row">
//                     <div className="icon">6</div>
//                     <div className="description">
//                       <h4>Winter</h4>
//                       <p>Winter has so much to offer - creative activities</p>
//                     </div>
//                   </div>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default About;




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