import React from 'react';
import '../../styles/CompanyStats.css';
import { FaBriefcase, FaCalendarCheck, FaHandshake } from 'react-icons/fa';

const stats = [
  {
    id: 1,
    number: "150+",
    label: "Proyectos Realizados",
    icon: <FaBriefcase />,
    description: "Soluciones estratégicas implementadas con éxito."
  },
  {
    id: 2,
    number: "12",
    label: "Años de Experiencia",
    icon: <FaCalendarCheck />,
    description: "Trayectoria sólida en el mercado de consultoría."
  },
  {
    id: 3,
    number: "85",
    label: "Empresas Soportadas",
    icon: <FaHandshake />,
    description: "Confianza depositada por líderes industriales."
  }
];

const CompanyStats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-card__icon">{stat.icon}</div>
              <div className="stat-card__content">
                <h2 className="stat-card__number">{stat.number}</h2>
                <h3 className="stat-card__label">{stat.label}</h3>
                <div className="stat-card__divider"></div>
                <p className="stat-card__description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;