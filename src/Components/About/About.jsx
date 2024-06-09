import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png' 

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About Livia University</h3>
            <h2>A Hub Of Academic Excellence And Innovation</h2>
            <p>  A beacon of academic excellence and innovation nestled in the heart of a vibrant city. Founded in 2004, Our University has a
                 storied history of nurturing intellectual curiosity and fostering groundbreaking research. Our sprawling campus, 
                 home to state-of-the-art facilities and lush green spaces, provides a stimulating environment where students 
                 can thrive both academically and personally. With a diverse community of over 20,000 students from around the globe,
                 </p>
            <p >We pride ourselves on our comprehensive array of academic programs designed to cater to a wide range of interests and 
                career aspirations. Our esteemed faculty, composed of leading experts and dedicated educators, are committed to delivering 
                a rigorous and engaging curriculum that challenges students to push the boundaries of knowledge. From undergraduate degrees
                 in liberal arts and sciences to advanced research opportunities in our renowned graduate programs, students have the resources
                  and support they need to achieve their highest potential. Our interdisciplinary approach encourages collaboration across fields, 
                fostering a dynamic learning environment where innovation and creativity flourish.</p>
        </div>
    </div>
  )
}

export default About