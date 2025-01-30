import React from 'react'
import './contact.css'
import mail from '/image_share_1736588217551.png'
import phone from '/image_share_1736587959536.png'
import location from '/image_share_1736587932965.jpg'


function Contect() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "184aae3c-79e1-4132-9349-954bce41f6b4");
    
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
    <div id='contact' className='contact'>
        <div className="contact-tittle">
            <h1>Get in touch</h1>
        </div>
        <div className="contect-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est atque adipisci tenetur culpa perspiciatis autem. Minima sapiente blanditiis, quam veritatis eius sint placeat incidunt at exercitationem, non minus provident.

                </p>
                <div className='contact-details'>
                    <div className="contact-detail">
                        <img style={{width:"40px"}}src={mail} alt="" /><p>navaneethakrishnanbsc@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img style={{width:"50px"}} src={phone} alt="" /> <p>9597275736</p>

                    </div>
                    <div className="contact-detail">
                        <img style={{width:"50px"}} src={location} alt="" /><p>Coimbatore</p>

                    </div>
                    
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='enter your email' name='email' />
                <label htmlFor="">Write your meassage</label>
                <textarea name="message" required rows="8">Your Message</textarea>
                <button type='submit' className='contact-submit'>submit now</button><span>{result}</span>

            </form>
        </div>

    </div>
        
    )
}

export default Contect
