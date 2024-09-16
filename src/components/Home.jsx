import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home"> 
    
    <div className="home-content">
      <h3>Hola soy</h3>
      <h1><span>Alex</span> Ramírez</h1>
      <h3>Y quiero ser <span>Developer Full Stack</span></h3>
      <p>Soy un pollito de Beu Company, perdido en el encantado mundo de la Programación.</p>

      <div className="social-media">
        <a href="https://www.facebook.com/david.alexis.5851?mibextid=ZbWKwL" aria-label="Perfil de Facebook de Alex Ramírez"><box-icon type="logo" name="facebook-circle"></box-icon></a>
        <a href="https://www.instagram.com/alexraptor.ar?igsh=MWE1OTN5dWV5ZmNlcQ==" aria-label="Perfil de Instagram de Alex Ramírez"><box-icon type="logo" name="instagram"></box-icon></a>
        <a href="https://www.linkedin.com/in/david-alexis-ramirez-zuluaga-033b2330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="Perfil de LinkedIn de Alex Ramírez"><box-icon name="linkedin" type="logo"></box-icon></a>
        <a href="https://github.com/Alex-dev-ux" aria-label="Perfil de GitHub de Alex Ramírez"><box-icon type="logo" name="github"></box-icon></a>
      </div>

      <div className="btn-group">
        <a href="/portfolio" className="btn">Hire</a>
        <a href="/contact" className="btn">Contact</a>
      </div>
    </div>

      <div className="home-img">
        <img src="/imagenes/port.png" alt="Imagen de Alex Ramírez" />
      </div>
    </section>
  );
};

export default Home;

