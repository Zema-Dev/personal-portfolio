import React from "react";
import Img1 from "../../assets/images/4.png";
import Img2 from "../../assets/images/6.jpg";
import Img3 from "../../assets/images/5.png";
import Img4 from "../../assets/images/1.png";
import Img5 from "../../assets/images/2.png";
import Img6 from "../../assets/images/3.png";
import "./Portfolios.css";

const Portfolios = () => {
  const portfolios = [
    [
      { img: Img1 },
      { img: Img2 },
      { img: Img3 },
      { img: Img4 },
      { img: Img5 },
      { img: Img6 },
    ],
  ];

  const renderPorfolios = (portfolios) => {
    return portfolios.map((portfolioRow, index) => (
      <div className="main-portfolios" key={index}>
        <div className="main-portfolio-title">
          <h1>Portfolio</h1>
        </div>
        <div className="main-portfolio">
          {portfolioRow.map((portfolio, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-img">
                <img src={portfolio.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        <button className="main-portfolio-btn">View More</button>
      </div>
    ));
  };

  return renderPorfolios(portfolios);
};

export default Portfolios;
