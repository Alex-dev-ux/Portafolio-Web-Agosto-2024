import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My Work</h2>

      <div className="portfolio-container">

        <div className="portfolio-box">
          <div className="portfolio-info">
          <i className="bx bxs-truck"></i>
          <i className="bx bxs-store-alt"></i>
          <i className="bx bx-shield-alt"></i>
            <h4>My Past</h4>
            <p>En esta sección conocerás con mas detalle los cargos e inducciones que he adquirido en el transcurso de vida.</p>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-info">
            <i className="bx bxs-devices"></i>
            <i className="bx bx-code"></i>
            <i className="bx bx-code-curly"></i>
            <h4>Path to the Future</h4>
            <p>En esta sección conocerás con mas detalle el enfoque de proyección que he adoctrinado a mi vida, el cual en tan poco tiempo pero con mucho esmero y dedicación a generado en mi intriga y pasión.</p>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Portfolio;
