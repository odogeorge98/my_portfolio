// src/App.js
import "./App.css";
// @ts-ignore: Could not find a declaration file for module './components/HeroSection'
// @ts-ignore: Could not find a declaration file for module './components/ServicesSection'
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import instagramIcon from "./logo.jpeg";

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo-circle"><img src={instagramIcon} alt="Instagram" className="logo-circle" /></div>
         
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About me</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact me</a>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;