import React from 'react'
import './Slider.css'

const Slider = () => {
    return (
        <section className='slider-wrapper'>
            <div className="slider-info">
                <h2>İlkbahar Kampanyası</h2>
                <p>Her kesime hitap eden uygun ürünler!</p>
                <a href="#">Keşfet</a>
            </div>
            <div className="image-wrapper">
                <img className='slider-image' src="/images/images/campaigne2.png" alt="Kampanya" />
            </div>
        </section>
    )
}

export default Slider
