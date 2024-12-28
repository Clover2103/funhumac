import React, { useState } from "react";
import Swal from "sweetalert2";
import logo from "../../assets/contact/logo.png"
import "./ContactForm.css";

const sendContact = process.env.REACT_APP_SEND_EMAIL_URL;

const ContactForm = () => {

  const [formData, setFormData] = useState({
    solicitud: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validaciones previas usando SweetAlert
    if (!formData.name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu nombre.',
      });
      return;
    }
    if (!formData.email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu correo electrónico.',
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico válido.',
      });
      return;
    }
    if (!formData.subject.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un asunto.',
      });
      return;
    }
    if (!formData.message.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un mensaje.',
      });
      return;
    }
  
    // Mostrar mensaje de carga
  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, espera mientras enviamos tu mensaje.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch(`${sendContact}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Verifica si la respuesta del servidor es válida
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    // Intenta parsear la respuesta a JSON
    const data = await response.json();

    // Cierra el mensaje de carga
    Swal.close();

    // Verifica si el servidor retornó "success"
    if (data.status === "success") {
      Swal.fire({
        icon: 'success',
        title: '¡Estupendo!',
        text: 'Tu mensaje ha sido enviado exitosamente.',
      });
    } else {
      // Si no es "success", asume que hay un error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message || 'Error desconocido al enviar el correo.',
      });
    }
  } catch (error) {
    // Maneja cualquier error durante la solicitud
    Swal.close();
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Error al enviar el correo.',
    });
  }
  };

  return (
    <div className="bodyContactForm">
      <div className="containerContactForm row g-2">
        <div className="col-md cont-logo-contact mb-5">
          <img src={logo} alt="logo" />
          <div className="cont-text-contact p-3">
            <p>Empoderemos a más mujeres, juntas cambiamos el mundo.</p>
            <p>Cada donación es una chispa de esperanza que enciende el futuro de mujeres valientes y resilientes. Tu apoyo nos permite fortalecer sus voces, construir oportunidades y celebrar las infinitas fortalezas de cada mujer.</p>
            <p>Dona hoy y sé parte del cambio.</p>
          </div>
        </div>
        <div className="contentContactForm col-md mb-5">
          <h4>FORMULARIO DE CONTACTO</h4>
          <form onSubmit={handleSubmit} id="formContact">

            <div className="form-floating mb-2">
              <select
                className="form-select"
                id="solicitud"
                name="solicitud"
                value={formData.solicitud}
                onChange={handleInputChange}
              >
                <option value="">--</option>
                <option value="SOLICITUD">SOLICITUD</option>
                <option value="QUEJA">QUEJA</option>
                <option value="APELACION">APELACIÓN</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
              <label htmlFor="solicitud">Tipo de Solicitud</label>
            </div>

            <div className="form-floating mb-2">
              <input
                className="form-control"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Nombre</label>
            </div>

            <div className="form-floating mb-2">
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-2">
              <input
                className="form-control"
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <label htmlFor="subject">Asunto</label>
            </div>

            <div className="form-floating mb-2 msg-contact">
              <textarea
                className="form-control "
                id="message"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="message">Mensaje</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactForm };