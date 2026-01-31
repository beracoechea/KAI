import React, { useState } from 'react';
import { ModalForm } from '../Modal/ModalForm';

export const TestSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const riskFactors = {
    procesos: [
      "Inercia Operativa (Procesos lentos)",
      "Fragmentación de Estándares",
      "Fuga de Rentabilidad (Costos altos)",
      "Déficit de Automatización"
    ],
    personas: [
      "Erosión de Talento (Rotación)",
      "Vacío de Liderazgo Ejecutivo",
      "Fricción en Gobernanza",
      "Silencios Organizacionales"
    ]
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de envío
    console.log("Diagnóstico enviado");
    setIsModalOpen(false);
  };

  return (
    <section className="audit-section">
      <div className="audit-container">
        
        {/* ENCABEZADO TÉCNICO */}
        <div className="audit-header">
          <div className="header-left">
            <span className="audit-tag">Análisis de Madurez </span>
            <h2 className="audit-main-title">Indicadores de <br /><span className="serif-italic">Riesgo Crítico</span></h2>
          </div>
          <div className="header-right">
            {/* CORRECCIÓN: Color de texto más oscuro para legibilidad */}
            <p className="audit-lead">
              Si identifica más de 3 factores en su organización, su empresa presenta un 
              <strong style={{color: 'var(--color-primary)'}}> estancamiento estructural</strong> que compromete la transformación industrial.
            </p>
          </div>
        </div>

        {/* MATRIZ DE RIESGOS */}
        <div className="audit-matrix">
          
          <div className="audit-card">
            <div className="card-index">01</div>
            <h3 className="card-category">Dimensión Operativa</h3>
            <div className="risk-group">
              {riskFactors.procesos.map((risk, i) => (
                <div key={i} className="risk-item">
                  <div className="risk-indicator green"></div>
                  <span className="risk-text">{risk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="audit-card">
            <div className="card-index">02</div>
            <h3 className="card-category">Dimensión Humana</h3>
            <div className="risk-group">
              {riskFactors.personas.map((risk, i) => (
                <div key={i} className="risk-item">
                  <div className="risk-indicator blue"></div>
                  <span className="risk-text">{risk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE CTA */}
          <div className="audit-cta-card">
            <div className="cta-content">
              <span className="cta-mini-label">Diagnóstico Inmediato</span>
              <h3 className="cta-title">¿Su organización es <br />escalable?</h3>
              {/* CORRECCIÓN: Color de texto de descripción más vibrante */}
              <p className="cta-text">Obtenga un informe de madurez detallado diseñado por nuestros especialistas.</p>
              
              <button className="btn-audit-premium" onClick={() => setIsModalOpen(true)}>
                <span>REALIZAR AUDITORÍA</span>
                <div className="btn-arrow">→</div>
              </button>
            </div>
            <div className="cta-decorative-grid"></div>
          </div>
        </div>
      </div>

      {/* LLAMADA AL MODAL CORREGIDA */}
      <ModalForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Formulario de Auditoría Inicial"
      >
        <form className="audit-modal-form" onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre del Directivo</label>
            <input type="text" placeholder="Ej. Carlos Slim" required style={{ width: '100%', padding: '10px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo Corporativo</label>
            <input type="email" placeholder="director@empresa.com" required style={{ width: '100%', padding: '10px' }} />
          </div>
          <button type="submit" className="btn-audit-premium" style={{ width: '100%', justifyContent: 'center' }}>
            <span>SOLICITAR DIAGNÓSTICO</span>
          </button>
        </form>
      </ModalForm>

      <style>{`
        .audit-section {
          background-color: #fcfcfc;
          padding: 120px 0;
          font-family: 'Inter', sans-serif;
        }

        .audit-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4%;
        }

        .audit-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
          gap: 40px;
        }

        .audit-tag {
          font-family: monospace;
          color: #8b5e3c; /* Café acento */
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.8rem;
          display: block;
          margin-bottom: 15px;
        }

        .audit-main-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          color: #0a192f; /* Azul profundo */
          line-height: 1;
          margin: 0;
          font-weight: 800;
        }

        .serif-italic {
          font-weight: 300;
          font-style: italic;
          color: #444;
        }

        .audit-lead {
          max-width: 400px;
          color: #222; /* CORRECCIÓN: Texto más oscuro */
          font-size: 1.1rem;
          line-height: 1.6;
          border-left: 4px solid #2d6a4f; /* Verde Bosque */
          padding-left: 20px;
        }

        .audit-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .audit-card {
          background: white;
          padding: 50px 40px;
          border: 1px solid #eee;
          position: relative;
        }

        .card-index {
          font-family: monospace;
          color: #f0f0f0;
          font-size: 3.5rem;
          font-weight: 800;
          position: absolute;
          top: 15px;
          right: 25px;
        }

        .card-category {
          font-size: 1.4rem;
          color: #0a192f;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .risk-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .risk-indicator { width: 12px; height: 2px; }
        .risk-indicator.green { background: #2d6a4f; }
        .risk-indicator.blue { background: #0a192f; }

        .risk-text { color: #333; font-weight: 500; font-size: 0.95rem; }

        /* CTA CARD CORREGIDA */
        .audit-cta-card {
          background: #0a192f;
          padding: 50px 40px;
          color: white;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta-mini-label {
          color: #c4a484; /* Dorado/Café suave */
          font-family: monospace;
          font-size: 0.8rem;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .cta-title { font-size: 2rem; margin: 15px 0; }

        .cta-text {
          color: #d1d1d1; /* CORRECCIÓN: Color gris claro visible sobre azul */
          margin-bottom: 35px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .btn-audit-premium {
          display: flex;
          align-items: center;
          background: #8b5e3c;
          border: none;
          color: white;
          cursor: pointer;
          font-weight: 800;
          width: fit-content;
          transition: 0.3s;
        }

        .btn-audit-premium span { padding: 18px 25px; }
        .btn-arrow { background: rgba(0,0,0,0.2); padding: 18px 20px; }

        .btn-audit-premium:hover { background: #a67c52; transform: translateY(-3px); }

        @media (max-width: 1024px) {
          .audit-matrix { grid-template-columns: 1fr 1fr; }
          .audit-cta-card { grid-column: span 2; }
          .audit-header { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 768px) {
          .audit-matrix { grid-template-columns: 1fr; }
          .audit-cta-card { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
};