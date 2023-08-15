import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

function Contact() {

  return (
    <section>
      <div className="footer">      
        <div className="links">
          <a href="mailto:tatianabertazoli@gmail.com"><AiOutlineMail /></a>
          <a href="https://github.com/TBertazoli"><AiOutlineGithub /></a>
          <a href="https://linkedin.com/in/tatibertazoli"><AiOutlineLinkedin /></a>
          <a href="https://twitter.com/TBertazoli"><AiOutlineTwitter/></a>
          <a href="tel:713-858-6951"><AiOutlinePhone /></a>
        </div>
      </div>
    </section>
  )
}



export default Contact;
