import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Aquí podrías mostrar un mensaje de éxito
        console.log('Mensaje enviado exitosamente');
      } else {
        // Manejo de errores
        console.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Hubo un error con la solicitud', error);
    }
    
    // Aquí es donde manejarías el envío de los datos, por ejemplo, enviándolos a un servidor o por correo electrónico.
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;


{/*const HomePage = () => {
  const ITEMS_PER_PAGE = 1; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los datos para la página actual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);

  // Número total de páginas
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Navbar />
      <Home />
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <About />
      <Portfolio />
      <Contact />

      <div>
        <ul>
          {currentUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        {/* Botones de paginación */}
        /*{<div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previou
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
              className="pagination-button"
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;}*/
