export const InfoSection = ({ sideTitle, description, infoImg, imageId = "02" }) => {
  return (
    <section className="info-container">
      {/* 1. Encabezado con Textos Contrapuestos - Estilo Minimalista */}
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

      {/* 2. Bloque de Contenido (Imagen Izq | Texto Der) */}
      <div className="content-grid">
        <div className="image-box">
          <img src={infoImg} alt={`Imagen ID: ${imageId} - Sección Informativa`} />
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
              empresarial actual para afrontar los efectos de esta nueva era.
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
          padding: var(--section-padding);
        }

        /* Dual Header Refinado */
        .dual-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
          gap: 60px;
        }

        .header-left { flex: 1.2; }
        
        .top-text {
          font-size: 1.2rem;
          color: var(--color-text-light);
          line-height: 1.6;
          margin-bottom: 25px;
          max-width: 500px;
          font-weight: 500;
        }

        .line-accent-green {
          width: 100px;
          height: 3px;
          background: var(--color-success); /* Verde */
        }

        .header-right {
          flex: 1;
          text-align: right;
        }

        .question-text {
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--color-primary); /* Azul */
          line-height: 1.1;
        }

        .light-text {
          display: block;
          font-weight: 300;
          color: var(--color-text-light);
        }

        /* Content Grid - Premium Layout */
        .content-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          background: #fff;
          box-shadow: var(--shadow-luxe);
          border: 1px solid var(--color-border);
        }

        .image-box {
          height: 600px;
          position: relative;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-reference-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255,255,255,0.9);
          padding: 5px 12px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--color-primary);
        }

        /* Text Box Styling */
        .text-box {
          padding: 80px;
          background: var(--color-bg);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          letter-spacing: 3px;
          color: var(--color-success);
          margin-bottom: 40px;
          font-weight: 700;
        }

        .section-badge .dot {
          width: 8px;
          height: 8px;
          background: var(--color-success);
          border-radius: 50%;
        }

        .side-title {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .main-description {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin-bottom: 25px;
        }

        .supplementary-text {
          color: var(--color-text-light);
          font-size: 1rem;
          margin-bottom: 40px;
        }

        /* Botón Café Estilo Premium */
        .btn-outline-cafe {
          align-self: flex-start;
          padding: 15px 40px;
          background: transparent;
          border: 1.5px solid var(--color-accent);
          color: var(--color-accent);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline-cafe:hover {
          background: var(--color-accent);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(167, 112, 74, 0.2);
        }

        @media (max-width: 1024px) {
          .text-box { padding: 40px; }
          .dual-header { gap: 30px; }
        }

        @media (max-width: 768px) {
          .dual-header { flex-direction: column; align-items: flex-start; }
          .header-right { text-align: left; }
          .content-grid { grid-template-columns: 1fr; }
          .image-box { height: 350px; }
        }
      `}</style>
    </section>
  );
};