import React, { useState } from 'react'
import "./course.scss"
import { Form, Link } from 'react-router-dom'

const Course = (props) => {
    let courseData = {
        image: props.image,
        title: props.title,
        subtitle: props.subtitle,
        price: props.price,
        priceClass: props.priceClass,
        discount: props.discount,
        discountClass: props.discountClass,
        certificate: props.certificate,
        info: props.info,
    }
    return (
        <Link className='course' to={"/info_page"} state={{propsCourse: courseData}}>
            <img src={courseData.image} className='course-img' alt="img" />
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
