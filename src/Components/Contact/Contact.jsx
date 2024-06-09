import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77e72998-9faa-4104-bf04-2415c2b0173d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us A Message<img src={msg_icon} alt=""/></h3>
            <p>We are here to help you with any questions or concerns you may have. Whether you are a prospective student, 
                current student, alumni, or visitor, please feel free to reach out to us through our contact form and contact
                information below. </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> oliviaoguelina@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> 08066008669</li>
                    <li><img src={location_icon} alt=''/> 17 Bukuru Lowcost, Abuja</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Your Phone</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact