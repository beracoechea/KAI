export const HomeHeader = ({ title, subtitle, imageUrl, imageId = "01" }) => {
  return (
    <section className="home-header">
      <div className="header-viewport">
        <img 
          src={imageUrl} 
          alt={`Imagen ID: ${imageId} - ${title}`} 
          className="header-img"
        />

        <div className="header-gradient"></div>

        <div className="header-overlay-box">
          <span className="image-tag">Ref: IMG-{imageId}</span>
          <h2 className="header-title">{title}</h2>
          <p className="header-subtitle">{subtitle}</p>
          
          <div className="header-actions">
            <button className="btn-premium-cafe">
              Ver Proyectos
            </button>
            <div className="line-decorator"></div>
          </div>
        </div>
      </div>

      <style>{`
        .home-header {
          width: 100%;
          background-color: var(--color-primary);
        }

        .header-viewport {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 600px;
          display: flex;
          align-items: flex-end; /* Alinea el contenido abajo en desktop */
          justify-content: flex-end; /* Alinea a la derecha en desktop */
          overflow: hidden;
        }

        .header-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          transition: transform 10s ease;
        }

        .header-viewport:hover .header-img {
          transform: scale(1.08);
        }

        .header-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg, 
            rgba(24, 35, 96, 0.6) 0%, 
            transparent 100%
          );
          z-index: 2;
        }

        .header-overlay-box {
          position: relative;
          z-index: 3;
          background-color: var(--color-primary);
          color: white;
          padding: clamp(2.5rem, 6vw, 4.5rem);
          max-width: 650px;
          box-shadow: -15px -15px 40px rgba(0,0,0,0.2);
          border-top-left-radius: 40px; /* Un radio más pronunciado para elegancia */
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .image-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--color-accent);
          font-weight: 700;
        }

        .header-title {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          line-height: 1.05;
          color: white !important;
          font-weight: 800;
        }

        .header-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          max-width: 500px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .btn-premium-cafe {
          background-color: var(--color-accent);
          color: white;
          border: none;
          padding: 1.2rem 2.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .btn-premium-cafe:hover {
          background-color: var(--color-accent-hover);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .line-decorator {
          height: 1px;
          flex-grow: 1;
          background-color: rgba(255, 255, 255, 0.3);
        }

        /* --- AJUSTES RESPONSIVOS CRÍTICOS --- */
        @media (max-width: 1024px) {
           .header-viewport {
             height: 70vh;
           }
           .header-overlay-box {
             max-width: 80%;
           }
        }

        @media (max-width: 768px) {
          .header-viewport {
            height: 100vh; /* Ocupa toda la pantalla en móvil */
            min-height: 100vh;
            align-items: flex-end;
            justify-content: center;
          }

          .header-overlay-box {
            max-width: 100%;
            width: 100%;
            border-radius: 0; /* Ocupa el ancho total abajo */
            padding: 3rem 2rem;
            border-top: 4px solid var(--color-accent); /* Línea de acento superior */
          }

          .header-title {
            font-size: 2.5rem;
          }

          .header-actions {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-premium-cafe {
            width: 100%;
            text-align: center;
          }

          .line-decorator {
            display: none;
          }
        }

        @media (max-height: 700px) and (max-width: 768px) {
          /* Ajuste para teléfonos pequeños/horizontales */
          .header-title { font-size: 2rem; }
          .header-overlay-box { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};