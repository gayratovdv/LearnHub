import React, { useState } from 'react'
import "./course.scss"
import { Form, Link } from 'react-router-dom'

const Course = (props) => {
    let toPage = "/info_page"
    let courseData = {
        search: props.search,
        title: props.title,
        subtitle: props.subtitle,
        price: props.price,
        priceClass: props.priceClass,
        discount: props.discount,
        discountClass: props.discountClass,
        info: props.info,
    }
    return (
        <Link className='course' to={toPage} state={{propsCourse: courseData}}>
            <img src={courseData.search} className='course-img' alt="img" />
            <div className="texts">
                <h4 className='title'>{courseData.title}</h4>
                <p className='subtitle'>{courseData.subtitle}</p>
                <div className="price-container">
                    <h5 className={courseData.priceClass}>{courseData.price}$</h5>
                    <h5 className={courseData.discountClass}>{courseData.discount}$</h5>
                </div>
            </div>
        </Link>
    )
}

export default Course
