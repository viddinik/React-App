import React from 'react'
import "./Rating.css"

const Rating = ({ rate }) => {
    return (
        <div className='rating'>
            {
                Array.from({ length: 5 }, (star, i) => {
                    const isFill = i + 1 <= rate;
                    return (
                        isFill ? <i className="fa-solid fa-star gold"></i> : <i className="fa-regular fa-star gold"></i>
                    )
                })
            }
        </div>
    )
}

export default Rating