import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Empowering Minds, One Lesson At A Time</h1>
            <p>We provide students, educators, and lifelong learners with the resources and tools
                 they need to thrive in an ever-evolving world. </p>
                 <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
        </div>
  )
}

export default Hero