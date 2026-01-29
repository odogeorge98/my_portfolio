import React from "react";
import "./HeroSection.css";
import heroPhoto from "../assets/hero-placeholder.png"; // adjust path if needed

// Image icons placed in the same folder as this component file
import instagramIcon from "./twitter.png";
import linkedinIcon from "./social.png";
import dribbbleIcon from "./Ig.png";
import behanceIcon from "./whatsapp.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero-left">
        <h3 className="eyebrow">Hi! I am</h3>
        <h2 className="hero-name eyebrow">Odo George</h2>
        <h1 className="hero-title">Programmer</h1>

        <div className="socials" aria-hidden="true">
          <a className="social" href="https://x.com/georgeobase98?s=21" title="Instagram" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" className="social-img" />
          </a>

          <a className="social" href="www.linkedin.com/in/odo-george-21920b378" title="LinkedIn" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
          </a>

          <a className="social" href="#" title="Dribbble" aria-label="Dribbble">
            <img src={dribbbleIcon} alt="Dribbble" className="social-img" />
          </a>

          <a className="social" href="https://wa.me/2348146264995" title="Behance" aria-label="Behance">
            <img src={behanceIcon} alt="Behance" className="social-img" />
          </a>
        </div>

        <p className="hero-sub">
          Delivering value through design, strategy and innovation.
        </p>

        <div className="cta-row">
          <button className="btn primary">Hire Me</button>

          <a className="btn outlined download-cv" href="/georgeobase.docx" download>
            Download CV
          </a>
        </div>

        <div className="stats-card" role="list" aria-label="Key stats">
          <div className="stat" role="listitem">
            <strong>5+</strong>
            <span>Experiences</span>
          </div>

          <div className="stat" role="listitem">
            <strong>27+</strong>
            <span>Projects done</span>
          </div>

          <div className="stat" role="listitem">
            <strong>20+</strong>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap">
          <div className="hero-ring" />
          <img src={heroPhoto} alt="Odo George" className="hero-photo" />
          <div className="floating-elements" aria-hidden="true">
            <div className="floating-element element-1">🎨</div>
            <div className="floating-element element-2">💡</div>
            <div className="floating-element element-3">⚡</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
