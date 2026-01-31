import React from 'react';
// Importa tus iconos (puedes usar react-icons o SVGs directos)
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export const FooterContact = () => {
  const contactData = {
    whatsapp: "https://wa.me/1234567890", // Reemplaza con tu número
    email: "mailto:contacto@tuempresa.com",
    linkedin: "https://linkedin.com/in/tuperfil",
    facebook: "https://facebook.com/tuperfil",
    instagram: "https://instagram.com/tuperfil"
  };

  return (
    <footer className="footer-contact">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-logo">KAI<span></span></h2>
          <p className="footer-tagline">Kaizen, Aplicación e Inovacion</p>
        </div>

        <div className="footer-links-group">
          <h3 className="footer-label">Contacto Inmediato</h3>
          <div className="social-grid">
            <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" className="social-item whatsapp">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>
            <a href={contactData.email} className="social-item email">
              <FaEnvelope /> <span>Correo</span>
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h3 className="footer-label">Nuestras Redes</h3>
          <div className="social-icons-only">
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={contactData.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 KAI - Todos los derechos reservados.</p>
      </div>

      <style>{`
        .footer-contact {
          background-color: #0d1231; /* Azul muy oscuro para contraste */
          color: white;
          padding: 60px 20px 20px;
          margin-top: auto;
          font-family: 'Inter', sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 40px;
        }

        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 15px;
        }

        .footer-logo span {
          color: #00aeef; /* Azul claro de Lean 360 */
        }

        .footer-tagline {
          color: rgba(255,255,255,0.6);
          max-width: 300px;
          line-height: 1.5;
        }

        .footer-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #f8f14e; /* Amarillo de TestSection */
          margin-bottom: 25px;
        }

        /* Botones de contacto */
        .social-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }

        .social-item:hover {
          color: #00aeef;
          transform: translateX(5px);
        }

        .social-item svg {
          font-size: 1.4rem;
        }

        /* Iconos de Redes */
        .social-icons-only {
          display: flex;
          gap: 20px;
        }

        .social-icons-only a {
          color: white;
          font-size: 1.8rem;
          transition: 0.3s;
        }

        .social-icons-only a:hover {
          color: #f8f14e;
          transform: translateY(-5px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-tagline {
            margin: 0 auto;
          }
          .social-grid, .social-icons-only {
            justify-content: center;
          }
          .social-icons-only {
            margin-top: 10px;
          }
        }
      `}</style>
    </footer>
  );
};