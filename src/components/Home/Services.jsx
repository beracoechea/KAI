import React, { useState } from 'react';
import { ModalForm } from '../Modal/ModalForm';

export const Services = ({ imageId = "03" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    // En móvil, esto permite alternar el giro con un toque
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const serviceData = [
    { 
      title: "Training", 
      tag: "Capacidad",
      desc: "Transformamos el potencial en competencia técnica mediante metodologías de alto rendimiento.",
      details: ["Workshops In-Company", "Certificaciones Técnicas", "Simuladores de Procesos", "Evaluación de Competencias"],
      color: "var(--color-success)" // Usamos tus variables globales
    },
    { 
      title: "Coaching", 
      tag: "Liderazgo",
      desc: "Acompañamiento estratégico de alta dirección para asegurar la madurez organizacional.",
      details: ["Mentoring Ejecutivo", "Alineación de Mandos Medios", "Gestión del Cambio", "Cultura de Resultados"],
      color: "var(--color-primary)" 
    },
    { 
      title: "Guide", 
      tag: "Estructura",
      desc: "Sistemas de control y material táctico diseñado para la sostenibilidad del modelo de negocio.",
      details: ["Manuales Operativos", "Software de Seguimiento", "Dashboards de Control", "Gobierno Corporativo"],
      color: "var(--color-accent)" 
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
              onClick={() => handleFlip(i)}
            >
              <div className="flip-card-inner">
                
                {/* Frente de la Card */}
                <div className="flip-card-front">
                  <div className="card-top">
                    <span className="card-tag" style={{ color: s.color }}>{s.tag}</span>
                    <div className="card-line" style={{ backgroundColor: s.color }}></div>
                  </div>
                  <h3 className="card-name">{s.title}</h3>
                  <p className="card-info">{s.desc}</p>
                  <div className="card-link-mock">
                    Detalles <span className="arrow">→</span>
                  </div>
                </div>

                {/* Vuelta de la Card */}
                <div className="flip-card-back" style={{ borderTop: `6px solid ${s.color}` }}>
                  <h4 className="back-title">Alcance del Servicio</h4>
                  <ul className="details-list">
                    {s.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <span className="close-hint">Toca para volver</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Contacto Estratégico" />

      <style>{`
        .services-section { 
          background: var(--color-bg); 
          padding: clamp(60px, 10vw, 120px) 0; 
        }
        .services-container { 
          max-width: var(--container-max); 
          margin: 0 auto; 
          padding: 0 20px; 
        }
        
        .top-divider { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .ref-number { font-size: 0.7rem; font-weight: 800; color: var(--color-accent); letter-spacing: 3px; }
        .horizontal-line { height: 1px; flex-grow: 1; background: var(--color-border); }

        .services-layout { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 60px; 
          align-items: center; 
          margin-bottom: clamp(40px, 8vw, 80px); 
        }

        .image-frame { 
          border: 1px solid var(--color-border); 
          padding: 15px;
          background: #fff;
          box-shadow: var(--shadow-luxe);
        }

        .img-controlled { 
          width: 100%; 
          height: clamp(300px, 40vh, 450px);
          object-fit: cover; 
          filter: grayscale(100%);
          transition: filter 0.5s ease;
          display: block;
        }

        .main-title-premium { font-size: clamp(2.2rem, 5vw, 3.8rem); line-height: 1; color: var(--color-primary); font-weight: 800; }
        .accent-text { color: var(--color-accent); font-weight: 300; font-style: italic; }
        .description-premium { color: var(--color-text-light); font-size: 1.1rem; line-height: 1.6; max-width: 500px; margin-top: 20px; }

        /* Flip Cards Grid */
        .services-minimal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          perspective: 1500px;
        }

        .flip-card { 
          height: 420px; 
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card.is-flipped .flip-card-inner { transform: rotateY(180deg); }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: white;
          border: 1px solid var(--color-border);
          padding: 35px;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
        }

        .flip-card-back { 
          transform: rotateY(180deg); 
          background: var(--color-bg-alt); 
        }

        .card-tag { font-size: 0.75rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
        .card-line { height: 1px; width: 40px; margin-left: 10px; }
        .card-top { display: flex; align-items: center; margin-bottom: 20px; }
        .card-name { font-size: 1.8rem; color: var(--color-primary); margin: 15px 0; font-weight: 700; }
        .card-info { color: var(--color-text-light); line-height: 1.6; font-size: 1rem; }
        
        .card-link-mock { margin-top: auto; color: var(--color-accent); font-weight: 800; text-transform: uppercase; font-size: 0.75rem; display: flex; align-items: center; gap: 8px; }

        .back-title { color: var(--color-primary); font-size: 0.9rem; margin-bottom: 25px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
        .details-list { list-style: none; padding: 0; margin-bottom: 20px; flex-grow: 1; }
        .details-list li { font-size: 0.95rem; color: var(--color-text-main); margin-bottom: 12px; padding-left: 20px; position: relative; }
        .details-list li::before { content: "•"; position: absolute; left: 0; color: var(--color-accent); font-weight: bold; }

        .close-hint { display: block; text-align: center; margin-top: 10px; font-size: 0.7rem; color: var(--color-text-light); text-transform: uppercase; letter-spacing: 1px; }

        /* --- RESPONSIVO --- */
        @media (max-width: 1100px) {
          .services-minimal-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .services-layout { grid-template-columns: 1fr; gap: 30px; }
          .services-minimal-grid { grid-template-columns: 1fr; }
          .img-controlled { height: 300px; filter: grayscale(0%); } /* Quitamos grayscale en móvil para impacto */
          .flip-card { height: 380px; }
          .main-title-premium { text-align: center; }
          .description-premium { text-align: center; margin: 20px auto; }
          .image-frame { order: -1; } /* Imagen arriba en móvil */
        }
      `}</style>
    </section>
  );
};