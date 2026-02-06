import React from 'react';
import '../../styles/TrainingCallToAction.css';

const TrainingCallToAction = () => {
  return (
    <section className="training-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <span className="cta-badge">Oportunidad Estratégica</span>
            <h2 className="cta-title">
              ¿Qué te detiene a vivir la <span className="text-accent">experiencia?</span>
            </h2>
            <div className="cta-divider"></div>
            <p className="cta-text">
              Inscribe a tu empresa ahora y obtén un <strong>apoyo del 30%</strong> por parte del 
              Círculo de Desarrollo Humano y Empresarial. Impulsa la institucionalización 
              de tu cadena de valor hoy mismo.
            </p>
            
            <div className="cta-info-box">
              <div className="info-item">
                <span className="info-label">Inversión</span>
                <span className="info-value">$4,900 USD + IVA</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duración</span>
                <span className="info-value">3 - 5 Días intensivos</span>
              </div>
            </div>

            <div className="cta-actions">
              <a 
                href="https://forms.gle/GSc7DbeQaS1raZwu7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-premium-cafe"
              >
                Inscríbete Aquí
              </a>
              <p className="cta-subtext">Cupo limitado por ciclo trimestral</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCallToAction;