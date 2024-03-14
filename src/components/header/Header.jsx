import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import "./Header.css";

const Header = () => {
  // State pour le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Fonction pour gérer la recherche
  const handleSearch = () => {
    // Ajoutez votre logique de recherche ici, par exemple, redirigez vers une page de résultats de recherche
    console.log(`Recherche de : ${searchTerm}`);
  };

  return (
    <header>
      <div className="header">
        <div className="logo">
          <h1>
            <a href="/">ZEMA-DEV</a>
          </h1>
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="header-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="info">
        <div className="info-text">
          <p>
            I'M <strong>ZEMA-DEV</strong>
            <br /> Developer Web and Mobile
          </p>
        </div>
        <div className="info-button">
          <button className="info-btn">Conatact Me</button>
        </div>
      </div>
      <div className="contacts">
        <div className="contact-item">
          <FacebookOutlined />
        </div>
        <div className="contact-item">
          <TwitterOutlined />
        </div>
        <div className="contact-item">
          <LinkedinOutlined />
        </div>
        <div className="contact-item">
          <WhatsAppOutlined />
        </div>
      </div>
      <div class="vertical-line" id="verticalLine"></div>
    </header>
  );
};

export default Header;
