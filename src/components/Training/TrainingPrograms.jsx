import React from 'react';
import '../../styles/TrainingPrograms.css';

const programs = [
  {
    id: "01",
    title: "Proyectos Integrales",
    desc: "Implementación de Filosofías Japonesas y Alemanas para alcanzar la Excelencia Operacional."
  },
  {
    id: "02",
    title: "Análisis Organizacional",
    desc: "Dinámicas grupales dirigidas por Master Coaches para potenciar el liderazgo y trabajo en equipo."
  },
  {
    id: "03",
    title: "Madurez Digital",
    desc: "Evaluación de 7 niveles para determinar el estado tecnológico actual de su organización."
  }
];

const TrainingPrograms = () => {
  return (
    <section className="programs-section bg-muted">
      <div className="container">
        <div className="programs-grid">
          {programs.map((prog) => (
            <div key={prog.id} className="program-card">
              <span className="program-number">{prog.id}</span>
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;