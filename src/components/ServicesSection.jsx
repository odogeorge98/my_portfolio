import React from "react";
import "./ServicesSection.css";

// Place your icon image files in the same folder or adjust the paths below.
// Example filenames used here (change if yours are different):
// ./icons/app-design.png
// ./icons/website-design.png
// ./icons/infographics.png
// ./icons/online-ads.png
// ./icons/logo-design.png
// ./icons/web-development.png

import appIcon from "./main-menu.png";
import websiteIcon from "./network.png";
import infoIcon from "./friends.png";
import adsIcon from "./connection.png";
import logoIcon from "./triangle.png";
import webdevIcon from "./globe.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Application",
      text: "Native & cross-platform mobile apps (React Native, Flutter) — production features & deployment.",
      icon: appIcon
    },
    {
      title: "Web Applications",
      text: "Full-stack web applications: SPAs, APIs, authentication and deployments.",
      icon: websiteIcon
    },
    {
      title: "Machine Learning",
      text: "Building practical ML models to extract insights and drive data-informed decisions.",
      icon: infoIcon
    },
    {
      title: "Website",
      text: "Responsive, content-focused websites and landing pages for projects or portfolios.",
      icon: adsIcon
    },
    {
      title: "Report Writing",
      text: "Technical reports, documentation and project reports — clear, structured, and evidence-based.",
      icon: logoIcon
    },
    {
      title: "Computer Science (Completed)",
      text: "Completed Computer Science degree — solid foundations in algorithms, systems and software engineering.",
      icon: webdevIcon
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Delivering value through design, strategy, and innovation.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="service-icon">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="service-icon-img"
                draggable="false"
              />
            </div>

            <h4 className="service-title">{service.title}</h4>
            <p className="service-desc">{service.text}</p>

            <div className="service-hover-effect" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
