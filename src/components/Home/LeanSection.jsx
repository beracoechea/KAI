import React from 'react';

export const LeanSection = () => {
  const leanPrinciples = [
    "Todo lo que no se mide, no puede ser mejorado",
    "Todos los procesos pueden dividirse en actividades que agregan y no agregan valor",
    "Valor es todo aquello por lo que el cliente esta dispuesto a pagar, el resto es desperdicio",
    "Una empresa exitosa es aquella que tiene en su staff, la cultura de medir e identificar el desperdicio y reducirlo o eliminarlo de forma constante."
  ];

  const gestaltPrinciples = [
    "El salario Emocional es la clave para retener talento",
    "El personal de una empresa es su valor más importante",
    "Una adecuada estructura organizacional es el pilar de una empresa solida",
    "Nada puede reemplazar los beneficios de capacitar y desarrollar el talento."
  ];

  const CardRow = ({ title, subtitle, principles, colorType }) => (
    <div className="principle-row">
      <div className="row-header">
        <h2 className="row-title">{title}</h2>
        <p className="row-subtitle">{subtitle}</p>
        <div className="title-underline"></div>
      </div>
      <div className="cards-grid">
        {principles.map((text, index) => (
          <div 
            key={index} 
            className={`principle-card ${index % 2 === 0 ? 'color-main' : 'color-alt'}`}
          >
            <div className="card-number">0{index + 1}</div>
            <p className="card-text">{text}</p>
            <div className="card-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="lean-container">
      <CardRow 
        title="Principios Lean 360" 
        subtitle="Entregando valor a los Procesos" 
        principles={leanPrinciples}
      />
      
      <div className="section-divider"></div>

      <CardRow 
        title="Principios DO Gestalt" 
        subtitle="Entregando valor a las Personas" 
        principles={gestaltPrinciples}
      />

      <style>{`
        .lean-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: var(--section-padding);
        }

        /* Header de Fila */
        .row-header {
          margin-bottom: 40px;
          position: relative;
        }

        .row-title {
          font-size: clamp(2rem, 3.5vw, 3.5rem);
          color: var(--color-primary);
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .row-subtitle {
          font-size: 1.1rem;
          color: var(--color-success);
          margin: 5px 0 15px 0;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: var(--color-accent);
        }

        /* Grid y Cards */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .principle-card {
          padding: 50px 30px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: default;
        }

        .principle-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          z-index: 10;
        }

        /* Alternancia de colores con la nueva paleta */
        .color-main {
          background-color: var(--color-primary); /* Azul */
        }

        .color-alt {
          background-color: var(--color-success); /* Verde */
        }

        .card-number {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .card-text {
          color: white;
          font-size: 1.05rem;
          line-height: 1.5;
          text-align: left;
          font-weight: 400;
        }

        .card-arrow {
          position: absolute;
          bottom: 30px;
          right: 30px;
          color: var(--color-accent); /* Café Dorado */
          font-size: 1.8rem;
          transition: transform 0.3s ease;
        }

        .principle-card:hover .card-arrow {
          transform: translateX(5px);
          color: white;
        }

        .section-divider {
          margin: 100px 0;
          height: 1px;
          background: linear-gradient(to right, var(--color-border), transparent);
        }

        @media (max-width: 1100px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }

        @media (max-width: 600px) {
          .cards-grid { grid-template-columns: 1fr; }
          .row-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};