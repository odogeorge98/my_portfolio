// src/components/PortfolioSection.js
import React, { useState } from "react";
import bg from "./bg.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.jpg";
import img4 from "./img4.png";
import img5 from "./img5.jpg";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Simplified portfolio items: removed empty `description`, empty `technologies` entries,
  // and removed `featured` flags altogether.
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "Mobile",
      image: img1
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "Website Design",
      image: img2,
      description: "Professional business website with modern aesthetics and improved UX",
      technologies: ["Web Design", "UI/UX", "Branding"]
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Graphics",
      image: img3,
      description: "Complete brand system including logo, typography, and visual guidelines",
      technologies: ["Logo Design", "Branding", "Illustrator"]
    },
    {
      id: 4,
      title: "Finance Dashboard UI",
      category: "Website Design",
      image: img4,
      description: "Data visualization dashboard with analytics and reporting features",
      technologies: ["Dashboard", "Data Viz", "Web UI"]
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      category: "Mobile",
      image: img5,
      description: "Health and wellness mobile application with activity tracking",
      technologies: ["Mobile UI", "Health Tech", "Prototyping"]
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Graphics",
      image: img6,
      description: "Complete social media graphics package for marketing campaign",
      technologies: ["Social Media", "Marketing", "Graphics"]
    },
    {
      id: 7,
      title: "Travel Booking Platform",
      category: "Website Design",
      image: img7,
      description: "User-friendly travel booking website with integrated payment system",
      technologies: ["E-commerce", "Booking System", "Web Design"]
    },
    {
      id: 8,
      title: "Food Delivery App",
      category: "Mobile",
      image: img8,
      description: "Mobile application for food ordering and delivery tracking",
      technologies: ["Mobile App", "Food Tech", "UX Design"]
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "Website Design",
      image: img3,
      description: "Modern portfolio website with smooth animations and responsive design",
      technologies: ["Portfolio", "Web Design", "Animation"]
    }
  ];

  // Filters simplified (removed the original "App / Mobile" string and replaced with "Mobile")
  const filters = ["All", "Website Design", "Mobile", "Graphics"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-sub">
            A curated collection of my latest design projects and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filter">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              <span className="filter-text">{filter}</span>
              <span className="filter-dot" />
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="port-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Image container only — no overlay so image is always fully visible */}
              <div className="port-image-container">
                <div className="port-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </div>

              {/* Card content beneath the image (keeps image fully visible) */}
              <div className="port-content">
                {/* <div className="port-badge">{item.category}</div>
                <h3 className="port-title">{item.title}</h3> */}

                {/* Render description only if present */}
                {/* {item.description && <p className="port-desc">{item.description}</p>} */}

                {/* Render technology tags only if present */}
                {/* {item.technologies && item.technologies.length > 0 && (
                  <div className="port-tech">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )} */}

                <div className="port-actions">
                  <button className="port-btn secondary" aria-label={`Open ${item.title}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M12 16V8M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
