import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './info.scss'

let Info_page = () => {
    let location = useLocation()
    let propsCourse = location.state
    return (
        <main>
            <Navbar />
            <Container >
                <main className='info-main'>
                    <h1 className='info-title'>{propsCourse.propsCourse.title}</h1>
                    <section className="info-sect">
                        <img className='info-img' src={propsCourse.propsCourse.search} alt="img" />
                        <div className="info-container">
                            <h4 className='info-subtitle'>{propsCourse.propsCourse.info}</h4>
                            <div className="buy-container">
                                <h3 className={propsCourse.propsCourse.priceClass}>{propsCourse.propsCourse.price}$</h3>
                                <h3 className={propsCourse.propsCourse.discountClass}>{propsCourse.propsCourse.discount}$</h3>
                                <button className='buy-btn'>Sotib olish</button>
                            </div>
                        </div>
                    </section>
                </main>
            </Container>
            <Footer />
        </main>
    )
}

export default Info_page
