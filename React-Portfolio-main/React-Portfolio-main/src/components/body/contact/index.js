import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me <strong>nagadurgavarada33@gamil.com</strong> and also contact on any of the platform</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;