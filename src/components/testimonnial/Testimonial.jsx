import React from "react";
import "./Testimonial.css";
// import Zema from "../../../images/Zema.png";

const Testimonial = () => {
  return (
    <div className="main-tesimonial">
      <div className="main-testimonial-title">
        <h1>Testimonial</h1>
      </div>
      <div className="main-testimonial-text">
        <div className="main-testimonial-text-p">
          <div className="main-testimonial-text-para">
            <div className="main-testimonial-para-trait"></div>
            <div className="main-testimonial-para-para">
              <p>
                <span>The design quality,</span> flexibility, documentation and
                <br />
                support are all absolutely <span>excellent.</span> I buy the
                Avada
                <br />
                theme for all my clients, knowing that whatever they <br />
                require, Avada will be able to deliver.
              </p>
            </div>
          </div>

          <div className="main-testimonial-name-h2">
            <h2>Josef Sharon</h2>
          </div>
          <div className="main-testimonial-name-h4">
            <div className="main-testimonial-trait"></div>
            <div className="main-testimonial-parag">
              <h4>CEO, Omisoft</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-testimonial-img">
        <img src="../../../images/w1.png" alt="zema" height={550} width={357} />
      </div>
    </div>
  );
};

export default Testimonial;
