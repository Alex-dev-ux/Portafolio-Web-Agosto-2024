import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2><span>Contact</span> Me</h2>

      <form action="">

        <div className="input-group">
          <div className="input-box">

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Your Email" required />

          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" required />
          </div>
        </div>

        <div className="input-group-2">
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <input type="submit" value="Send Message" className="btn" />
        </div>

      </form>      
    </section>  
  );
};

export default Contact;
