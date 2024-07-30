import React from 'react'
import "./course.scss"
import { Link } from 'react-router-dom'

const Course = (props) => {
    let toPage = "/course_info_" + props.id
    console.log(toPage);
    console.log(props.id);
    return (
        <Link className='course' to={toPage}>
            <img src={props.search} className='course-img' alt="img" />
            <div className="texts">
                <h4 className='title'>{props.title}</h4>
                <p className='subtitle'>{props.subtitle}</p>
                <div className="price-container">
                    <h5 className={props.priceClass}>{props.price}$</h5>
                    <h5 className={props.discountClass}>{props.discount}$</h5>
                </div>
            </div>
        </Link>
    )
}

export default Course
