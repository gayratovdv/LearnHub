import React from 'react'
import "./category.scss"

const Category = (props) => {
    return (
        <div className="category">
            <h3 className='title'>{props.title}</h3>
            <div className="circle"></div>
        </div>
    )
}

export default Category
