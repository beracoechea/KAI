export const InfoSection = ({ sideTitle, description, infoImg, imageId = "02" }) => {
  return (
    <section className="info-container">
      {/* 1. Encabezado Dual */}
      <div className="dual-header">
        <div className="header-left">
          <p className="top-text">
            La 5ta Transformación Industrial y el Cambio Generacional de Talento están aquí.
          </p>
          <div className="line-accent-green"></div>
        </div>
        
        <div className="header-right">
          <h2 className="question-text">
            ¿Estás preparado <span className="light-text">para esta transición?</span>
          </h2>
        </div>
      </div>

      {/* 2. Bloque de Contenido */}
      <div className="content-grid">
        <div className="image-box">
          <img src={infoImg} alt={`Imagen ID: ${imageId}`} />
          <div className="image-reference-tag">Ref: IMG-{imageId}</div>
        </div>
        
        <div className="text-box">
          <div className="section-badge">
            <span className="dot"></span> ACTUALIDAD
          </div>
          
          <div className="rich-text">
            <h3 className="side-title">{sideTitle}</h3>
            <p className="main-description">{description}</p>
            <p className="supplementary-text">
              Nuestro enfoque combina la estética clásica con las necesidades 
              digitales del <strong>2026</strong>. Exploraremos la preparación y madurez 
              empresarial actual para afrontar los efectos de esta era.
            </p>
          </div>

          <button className="btn-outline-cafe">
            Explorar Detalles
          </button>
        </div>
      </div>

      <style>{`
        .info-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: clamp(60px, 10vw, 120px) 20px; /* Padding dinámico */
        }

        /* Dual Header */
        .dual-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: clamp(40px, 8vw, 80px);
          gap: 40px;
        }

        .header-left { flex: 1.2; }
        .header-right { flex: 1; text-align: right; }

        .top-text {
          font-size: clamp(1rem, 1.2vw, 1.2rem);
          color: var(--color-text-light);
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 450px;
        }

        .line-accent-green {
          width: 80px;
          height: 3px;
          background: var(--color-success);
        }

        .question-text {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          color: var(--color-primary);
          line-height: 1.1;
        }

        .light-text {
          display: block;
          font-weight: 300;
          color: var(--color-text-light);
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          background: var(--color-bg);
          box-shadow: var(--shadow-luxe);
          border: 1px solid var(--color-border);
          overflow: hidden; /* Evita que la imagen rompa el radio si lo hubiera */
        }

        .image-box {
          height: 100%; /* Se adapta al contenido de texto en desktop */
          min-height: 500px;
          position: relative;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Text Box */
        .text-box {
          padding: clamp(30px, 6vw, 80px); /* Padding que se reduce en móvil */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 2px;
          color: var(--color-success);
          margin-bottom: 25px;
          font-weight: 700;
        }

        .section-badge .dot {
          width: 8px;
          height: 8px;
          background: var(--color-success);
          border-radius: 50%;
        }

        .side-title {
          font-size: clamp(1.5rem, 2vw, 1.8rem);
          color: var(--color-primary);
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .main-description {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .supplementary-text {
          color: var(--color-text-light);
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .btn-outline-cafe {
          align-self: flex-start;
          padding: 14px 35px;
          background: transparent;
          border: 1.5px solid var(--color-accent);
          color: var(--color-accent);
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .btn-outline-cafe:hover {
          background: var(--color-accent);
          color: white;
        }

        /* --- MEDIA QUERIES CORRECTIVOS --- */
        @media (max-width: 1024px) {
          .dual-header { gap: 20px; }
          .content-grid { grid-template-columns: 1fr; } /* Stack en tablet */
          .image-box { height: 400px; min-height: auto; }
        }

        @media (max-width: 768px) {
          .info-container { padding: 40px 15px; }

          .dual-header {
            flex-direction: column-reverse; /* La pregunta arriba, el texto descriptivo abajo */
            align-items: flex-start;
            margin-bottom: 30px;
          }

          .header-right { text-align: left; width: 100%; }
          .header-left { margin-top: 15px; }

          .top-text { font-size: 0.95rem; margin-bottom: 15px; }

          .text-box { padding: 40px 20px; } /* Ajuste de aire en móvil */
          
          .btn-outline-cafe {
            width: 100%; /* Botón completo en móvil */
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};