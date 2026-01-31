import React, { useState } from 'react';
import { ModalForm } from '../Modal/ModalForm';

export const Services = ({ imageId = "03" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index, e) => {
    if (e.target.closest('.back-btn')) return;
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const serviceData = [
    { 
      title: "Training", 
      tag: "Capacidad",
      desc: "Transformamos el potencial en competencia técnica mediante metodologías de alto rendimiento.",
      details: ["Workshops In-Company", "Certificaciones Técnicas", "Simuladores de Procesos", "Evaluación de Competencias"],
      color: "#2d6a4f" 
    },
    { 
      title: "Coaching", 
      tag: "Liderazgo",
      desc: "Acompañamiento estratégico de alta dirección para asegurar la madurez organizacional.",
      details: ["Mentoring Ejecutivo", "Alineación de Mandos Medios", "Gestión del Cambio", "Cultura de Resultados"],
      color: "#0a192f" 
    },
    { 
      title: "Guide", 
      tag: "Estructura",
      desc: "Sistemas de control y material táctico diseñado para la sostenibilidad del modelo de negocio.",
      details: ["Manuales Operativos", "Software de Seguimiento", "Dashboards de Control", "Gobierno Corporativo"],
      color: "#8b5e3c" 
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        <div className="top-divider">
          <span className="ref-number">IMG-{imageId}</span>
          <div className="horizontal-line"></div>
        </div>

        <div className="services-layout">
          <div className="services-content">
            <h2 className="main-title-premium">
              Estrategia <br /> 
              <span className="accent-text">& Portafolio</span>
            </h2>
            <p className="description-premium">
              No solo ofrecemos consultoría; diseñamos arquitecturas de trabajo 
              que permiten a las empresas dominar su sector mediante la eficiencia.
            </p>
          </div>

          <div className="services-visual">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
                alt="Arquitectura Corporativa" 
                className="img-controlled"
              />
            </div>
          </div>
        </div>

        <div className="services-minimal-grid">
          {serviceData.map((s, i) => (
            <div 
              key={i} 
              className={`flip-card ${flippedIndex === i ? 'is-flipped' : ''}`}
              onClick={(e) => handleFlip(i, e)}
            >
              <div className="flip-card-inner">
                
                <div className="flip-card-front">
                  <div className="card-top">
                    <span className="card-tag" style={{ color: s.color }}>{s.tag}</span>
                    <div className="card-line" style={{ backgroundColor: s.color }}></div>
                  </div>
                  <h3 className="card-name">{s.title}</h3>
                  <p className="card-info">{s.desc}</p>
                  <div className="card-link-mock">
                    Click para detalles <span className="arrow">→</span>
                  </div>
                </div>

                <div className="flip-card-back" style={{ borderTop: `4px solid ${s.color}` }}>
                  <h4 className="back-title">Alcance del Servicio</h4>
                  <ul className="details-list">
                    {s.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  <span className="close-hint">Volver</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Contacto Estratégico" />

      <style>{`
        .services-section { background: #fff; padding: 100px 0; }
        .services-container { max-width: 1200px; margin: 0 auto; padding: 0 4%; }
        
        .top-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 60px; }
        .ref-number { font-size: 0.7rem; font-weight: 800; color: #8b5e3c; letter-spacing: 3px; }
        .horizontal-line { height: 1px; flex-grow: 1; background: linear-gradient(to right, #eee, transparent); }

        /* Layout & Imagen Controlada */
        .services-layout { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 60px; 
          align-items: center; 
          margin-bottom: 80px; 
        }

        .image-frame { 
          border: 1px solid #f0f0f0; 
          padding: 15px;
          background: #fff;
          line-height: 0; /* Evita espacio extra debajo de la imagen */
        }

        .img-controlled { 
          width: 100%; 
          height: 400px; /* Altura fija para evitar desborde */
          object-fit: cover; /* Recorta la imagen para llenar el espacio sin deformarse */
          filter: grayscale(100%);
          transition: filter 0.5s ease;
          display: block;
        }

        .image-frame:hover .img-controlled {
          filter: grayscale(0%);
        }

        .main-title-premium { font-size: clamp(2.5rem, 4vw, 4rem); line-height: 0.9; color: #0a192f; font-weight: 800; }
        .accent-text { color: #8b5e3c; font-weight: 300; font-style: italic; }
        .description-premium { color: #555; font-size: 1.1rem; line-height: 1.6; max-width: 500px; margin-top: 20px; }

        /* Flip Cards */
        .services-minimal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          perspective: 2000px;
        }

        .flip-card { height: 420px; cursor: pointer; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card.is-flipped .flip-card-inner { transform: rotateY(180deg); }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: white;
          border: 1px solid #f0f0f0;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .flip-card-back { transform: rotateY(180deg); background: #fafafa; }

        .card-tag { font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .card-line { height: 1px; width: 30px; margin-left: 10px; }
        .card-top { display: flex; align-items: center; margin-bottom: 20px; }
        .card-name { font-size: 2rem; color: #0a192f; margin: 15px 0; font-weight: 700; }
        .card-info { color: #666; line-height: 1.6; font-size: 0.95rem; }
        
        .card-link-mock { margin-top: auto; color: #8b5e3c; font-weight: 800; text-transform: uppercase; font-size: 0.7rem; display: flex; align-items: center; gap: 8px; }

        .back-title { color: #0a192f; font-size: 1rem; margin-bottom: 20px; font-weight: 800; text-transform: uppercase; }
        .details-list { list-style: none; padding: 0; margin-bottom: 20px; flex-grow: 1; }
        .details-list li { font-size: 0.9rem; color: #333; margin-bottom: 10px; padding-left: 15px; position: relative; }
        .details-list li::before { content: "→"; position: absolute; left: 0; color: #8b5e3c; }

        .back-btn {
          background: #0a192f; color: white; border: none; padding: 15px;
          font-weight: 700; cursor: pointer; font-size: 0.75rem; letter-spacing: 1px;
        }

        .close-hint { display: block; text-align: center; margin-top: 10px; font-size: 0.6rem; color: #bbb; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .services-layout { grid-template-columns: 1fr; }
          .services-minimal-grid { grid-template-columns: 1fr; }
          .img-controlled { height: 300px; }
        }
      `}</style>
    </section>
  );
};