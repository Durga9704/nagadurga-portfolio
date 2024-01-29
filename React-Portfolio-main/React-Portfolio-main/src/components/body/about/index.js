import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">varada Naga Durga</span>.
         <br />  I am pursuing Btech third year from cyber security in kiet group of institutions
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/nagadurga.png")}
            className="picture"
          />
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />

        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;