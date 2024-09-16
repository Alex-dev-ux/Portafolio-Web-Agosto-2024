import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
          <img src="/imagenes/about.png" alt="Imagen de Alex Ramirez" />
      </div>

      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>
          Soy Alex Ramirez, un chico de la ciudad de Medellin, residente natural del Municipio de Sabaneta - Antioquia, ubicado en el área metropolitana del Valle de Aburrá. Tengo 32 años de edad.
        </p>
        <p>
          Una persona que hasta hace poco tiempo desempeñaba un rol como independiente en el comercio urbano, con habilidad y experiencia en las áreas de seguridad y conducción de vehículos automotores.
        </p>
        <a href="#" className="btn" aria-label="Leer más sobre Alex Ramirez">Read More</a>
      </div>
    </section>
  );
};

export default About;

