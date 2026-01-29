import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

// Use the uploaded screenshot path from this session for the profile photo:
import profilePhoto from "./bg.png";

// Replace these with your actual skill icon files
import figmaIcon from "./figma.png";
import xdIcon from "./programing.png";
import psIcon from "./relational.png";
import aiIcon from "./physics.png";
import prIcon from "./python.png";

const AboutSection = () => {
  const skills = [
    { label: "Figma", pct: 100, icon: figmaIcon },
    { label: "Node Js", pct: 100, icon: xdIcon },
    { label: "Database Mysql", pct: 85, icon: psIcon },
    { label: "React", pct: 60, icon: aiIcon },
    { label: "Python", pct: 70, icon: prIcon },
  ];

  const [skillsInView, setSkillsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsInView(true);
      },
      { threshold: 0.25 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // build CSS variables for each ring
  const getRingStyle = (pct) => {
    // clamp to 0..100 then convert to degrees 0..360
    const clamped = Math.max(0, Math.min(100, pct));
    const fillDeg = (clamped / 100) * 360;
    const rotation = -90; // start from top
    // chosen light ash color with alpha:
    const empty = "#D9D9D933"; // the color you requested
    return {
      "--fill-degree": `${fillDeg}deg`,
      "--rotation": `${rotation}deg`,
      "--empty-color": empty
    };
  };

  return (
    <section id="about" className="section about">
      <div className="about-inner">
        <div className="about-photo-wrap">
          <div className="about-ring" aria-hidden />
          <img src={profilePhoto} alt="Profile" className="about-photo" draggable="false" />
        </div>

        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-copy">
            I'm Odo George Obase, a Computer Science student and software developer who builds practical, user-focused digital experiences. I work on web and mobile projects using React, TypeScript and React Native, and build backends with Node.js and MySQL. I also code in JavaScript, HTML, CSS, Python and R—able to prototype, analyse data, and deliver production-ready features with clear documentation. I combine solid technical foundations with an appreciation for good design to produce reliable, well-structured projects. When I'm not coding, I explore new tools and trends that level up my craft.
          </p>

          <a className="btn primary btn-download" href="/resume.pdf" download>
            <span className="btn-icon" aria-hidden>⬇</span>
            Download CV
          </a>
        </div>
      </div>

      <div className={`skills section ${skillsInView ? "skills-visible" : ""}`} ref={skillsRef}>
        <div className="skills-row">
          {skills.map((skill, i) => {
            const ringClass = skill.pct === 100 ? "skill-ring full-ring" : "skill-ring partial-ring";
            return (
              <div className="skill" key={skill.label} data-pct={skill.pct} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="skill-badge">
                  <div className={ringClass} style={getRingStyle(skill.pct)} aria-hidden />
                  <div className="skill-icon-wrapper">
                    <img src={skill.icon} alt={skill.label} className="skill-icon" />
                  </div>
                </div>

                <div className="skill-pct">{skill.pct}%</div>
                <div className="skill-label">{skill.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
