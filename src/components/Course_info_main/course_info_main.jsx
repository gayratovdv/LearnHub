import React from 'react'
import Container from '../Container/Container'
import "./course_info_main.scss"

const course_info_main = (props) => {
  return (
    <Container >
        <main className='info-main'>
            <h1 className='info-title'>{props.title}</h1>
            <section className="info-sect">
                <img src={props.image} alt="img" />
                <h4 className='info-subtitle'>{props.subtitle}</h4>
            </section>
            <button className='buy-btn'>Sotib olish</button>
        </main>
    </Container>
  )
}

export default course_info_main
