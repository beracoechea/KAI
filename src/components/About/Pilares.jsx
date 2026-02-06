import React from 'react';
import '../../styles/Pilares.css';

const pilaresData = [
  { id: "01", title: "Brindamos", desc: "Soporte para desarrollar Procesos Institucionales." },
  { id: "02", title: "Introducimos", desc: "Una cultura japonesa de Mejora Continua a su Staff." },
  { id: "03", title: "Aseguramos", desc: "Control de su empresa mediante Métricos de Procesos." },
  { id: "04", title: "Generamos", desc: "Incremento de productividad mediante proyectos de Ahorros Hard & Soft." },
  { id: "05", title: "Creamos", desc: "Estructuras sólidas de Desarrollo Humano y Organizacional." },
  { id: "06", title: "Preparamos", desc: "A su empresa para enfrentar los retos de las nuevas generaciones Industria 4.0" },
  { id: "07", title: "Mejoramos", desc: "El Clima Organizacional y Reducimos la alta rotación de personal." },
  { id: "08", title: "Implementamos", desc: "La ruptura de paradigmas que impide el crecimiento sustentable de su empresa." },
];

const Pilares = () => {
  return (
    <section className="pilares-section">
      <div className="container">
        <div className="pilares-header">
          <h2 className="pilares-main-title">Nuestros 8 Pilares</h2>
          <p className="pilares-subtitle">¿Por qué nos eligen nuestros clientes?</p>
        </div>

        <div className="pilares-grid">
          {pilaresData.map((pilar) => (
            <div key={pilar.id} className="pilar-card">
              <div className="pilar-number">{pilar.id}</div>
              <div className="pilar-content">
                <h3 className="pilar-title">{pilar.title}</h3>
                <p className="pilar-desc">{pilar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pilares;