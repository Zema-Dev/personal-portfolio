import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./App.css";
import Skills from "./components/skills/Skills";
import Portfolios from "./components/portfolio/Portfolios";
import Experience from "./components/experience/Experience";
import Testimonial from "./components/testimonnial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-about">
        <About />
      </div>
      <div className="app-skill">
        <div className="app-skill-title">
          <h1>My Skills</h1>
        </div>
        <Skills />
      </div>
      <div className="app-portfolio">
        <Portfolios />
      </div>
      <div className="app-experience">
        <Experience />
      </div>
      <div className="app-testimonial">
        <Testimonial />
      </div>
      <div className="app-contact">
        <Contact />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
