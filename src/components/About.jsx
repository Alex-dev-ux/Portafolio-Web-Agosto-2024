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
          Soy Alex Ramirez, un aprendiz entusiasta del mundo de la tecnología y la programación. Originario de Medellín, Colombia, nací en marzo de 1992 y actualmente estoy dando mis primeros pasos en este fascinante campo del desarrollo web.
        </p>
        <p>
          Mi camino en la programación está apenas comenzando. Como aprendiz nato, reconozco que mi conocimiento es muy básico, casi desde cero, pero mi determinación y pasión por aprender me impulsan cada día. Actualmente tengo el privilegio de ser parte de Beu Inc. Empresa que me ha acogido y brindado la invaluable oportunidad de aprender y crecer en el área de QA Testing, permitiéndome desarrollar habilidades prácticas mientras continúo mi formación de manera Autodidacta en desarrollo web.
        </p>
        <a href="#" className="btn" aria-label="Leer más sobre Alex Ramirez">Read More</a>
      </div>
    </section>
  );
};

export default About;

