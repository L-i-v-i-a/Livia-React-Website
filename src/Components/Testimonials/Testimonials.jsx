import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'> 
    <img src={next_icon} alt="" className="next-btn"  onClick={slideForward} />
    <img src={back_icon} alt="" className="back-btn"  onClick={slideBackward} />
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>Jacob Anthony</h3>
                            <span>Livia, Nigeria</span>
                        </div>
                          </div>
                          <div>
                            <p>The Computer Science program at Livia University has been a transformative experience. The faculty are not only experts in their
                                 fields but also approachable and supportive. The state-of-the-art labs and facilities have provided me with hands-on experience, 
                                 and the collaborative environment has allowed me to work on exciting projects with my peers.</p>
                        </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Elena Garcia</h3>
                            <span>Livia, Nigeria</span>
                        </div>
                    </div>
                    <div>
                            <p> The campus at Livia University is beautiful and equipped with everything a student might need. 
                                There are numerous clubs and organizations to join, which makes it easy to meet people and get involved.
                                 The university also places a strong emphasis on community service and social responsibility, 
                                which has been an enriching part of my experience.</p>
                        </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Jane Richard</h3>
                            <span>Livia, Nigeria</span>
                        </div>
                     </div>
                     <div>
                            <p>Starting my journey at Livia University has been exciting and fulfilling. The orientation programs and freshman 
                                support services made the transition to college life smooth and enjoyable.  I'm looking forward to 
                                exploring all the opportunities and resources available here over the next few years.</p>
                        </div>
       
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Robert Martinez</h3>
                            <span>Livia, Nigeria</span>
                        </div>
                    </div>
                    <div>
                            <p>As I approach graduation, I can confidently say that Livia University has exceeded my expectations.
                                 The comprehensive education, supportive community, and myriad of opportunities for growth and development have been outstanding. 
                                I feel well-prepared to take on the challenges of the real world thanks to my time here.</p>
                        </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials