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

  const CardRow = ({ title, subtitle, principles }) => (
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
            <div className="card-top">
              <span className="card-number">0{index + 1}</span>
              <div className="card-dot"></div>
            </div>
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
      
      <div className="section-divider">
        <div className="divider-icon">ED</div>
      </div>

      <CardRow 
        title="Principios DO Gestalt" 
        subtitle="Entregando valor a las Personas" 
        principles={gestaltPrinciples}
      />

      <style>{`
        .lean-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: clamp(60px, 10vw, 120px) 20px;
        }

        /* Header Estilo Editorial */
        .row-header {
          margin-bottom: clamp(30px, 5vw, 50px);
          text-align: left;
        }

        .row-title {
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          color: var(--color-primary);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -1px;
          line-height: 1;
        }

        .row-subtitle {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          color: var(--color-success);
          margin: 10px 0;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--color-accent);
          margin-top: 15px;
        }

        /* Grid de tarjetas optimizado */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 15px;
        }

        .principle-card {
          padding: 40px 30px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 4px; /* Un toque sutil para no verse tan rígido */
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-number {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 800;
          letter-spacing: 2px;
        }

        .card-dot {
          width: 6px;
          height: 6px;
          background: var(--color-accent);
          border-radius: 50%;
        }

        .card-text {
          color: white;
          font-size: clamp(1rem, 1.1vw, 1.1rem);
          line-height: 1.6;
          font-weight: 400;
          margin: 0;
        }

        .card-arrow {
          align-self: flex-end;
          color: rgba(255, 255, 255, 0.3);
          font-size: 1.5rem;
          margin-top: 20px;
          transition: 0.3s ease;
        }

        /* Colores Paleta Consultoría */
        .color-main { background-color: var(--color-primary); }
        .color-alt { background-color: var(--color-secondary); } /* Cambié a secondary para mejor armonía */

        /* Efectos Hover (Deshabilitados sutilmente en móvil para UX) */
        @media (min-width: 1025px) {
          .principle-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(24, 35, 96, 0.2);
          }
          .principle-card:hover .card-arrow {
            transform: translateX(8px);
            color: var(--color-accent);
          }
        }

        /* Divisor de Sección */
        .section-divider {
          margin: clamp(60px, 10vw, 100px) 0;
          height: 1px;
          background: var(--color-border);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .divider-icon {
          background: white;
          padding: 0 20px;
          color: var(--color-border);
          font-weight: 800;
          font-size: 0.7rem;
          letter-spacing: 4px;
        }

        /* --- AJUSTES MÓVILES --- */
        @media (max-width: 768px) {
          .lean-container { padding: 50px 15px; }
          
          .cards-grid {
            grid-template-columns: 1fr; /* Una sola columna para legibilidad */
            gap: 12px;
          }

          .principle-card {
            min-height: auto; /* Que la card crezca según el texto */
            padding: 35px 25px;
          }

          .row-title { text-align: left; }
          
          .section-divider { margin: 60px 0; }
        }
      `}</style>
    </section>
  );
};