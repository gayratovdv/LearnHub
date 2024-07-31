import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./course_info_main.scss"

const course_info_main = (props) => {
  return (
    <main>
      <Navbar />
      <Container >
        <main className='info-main'>
          <h1 className='info-title'>{props.title}</h1>
          <section className="info-sect">
            <img className='info-img' src={props.image} alt="img" />
            <h4 className='info-subtitle'>{props.subtitle}</h4>
          </section>
          <div className="buy-container">
            <h3 className='price'></h3>
            <button className='buy-btn'>Sotib olish</button>
          </div>
        </main>
      </Container>
      <Footer/>
    </main>
  )
}

export default course_info_main
