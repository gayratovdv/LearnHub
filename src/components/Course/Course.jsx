import React from 'react'
import "./course.scss"

const Course = (props) => {
    return (
        <div className="course">
            <img src={props.search} className='course-img' alt="img" />
            <div className="texts">
                <h4 className='title'>{props.title}</h4>
                <p className='subtitle'>{props.subtitle}</p>
                <h5 className={props.priceClass}>{props.price}$</h5>
                <h5 className={discountClass}>{props.discount}$</h5>
            </div>
        </div>
    )
}

Course.defaultProps = {
    priceClass: "price",
    discountClass: "discount",
}

export default Course
