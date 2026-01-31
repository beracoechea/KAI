export const HomeHeader = ({ title, subtitle, imageUrl, imageId = "01" }) => {
  return (
    <section className="home-header">
      <div className="header-viewport">
        {/* Imagen de Fondo con ID para referencia del cliente */}
        <img 
          src={imageUrl} 
          alt={`Imagen ID: ${imageId} - ${title}`} 
          className="header-img"
        />

        {/* Overlay de Gradiente para legibilidad */}
        <div className="header-gradient"></div>

        {/* Cuadro de Texto Premium */}
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
          overflow: hidden;
        }

        .header-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 10s ease; /* Efecto Zoom lento premium */
        }

        .header-viewport:hover .header-img {
          transform: scale(1.05);
        }

        .header-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(24, 35, 96, 0.4), transparent);
        }

        /* Caja de Texto - Estética Editorial */
        .header-overlay-box {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: var(--color-primary);
          color: white;
          padding: clamp(2rem, 5vw, 4rem); /* Espaciado fluido */
          max-width: 600px;
          box-shadow: -10px -10px 30px rgba(0,0,0,0.1);
          border-top-left-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .image-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent); /* Café */
          font-weight: 700;
        }

        .header-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1;
          color: white !important;
          margin: 0;
        }

        .header-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 450px;
          margin: 0;
        }

        /* Botón y Decorador */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 1rem;
        }

        .btn-premium-cafe {
          background-color: var(--color-accent);
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-premium-cafe:hover {
          background-color: var(--color-accent-hover);
          transform: translateY(-3px);
        }

        .line-decorator {
          height: 1px;
          flex-grow: 1;
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-viewport {
            height: auto;
            display: flex;
            flex-direction: column;
          }
          
          .header-img {
            height: 400px;
          }

          .header-overlay-box {
            position: relative;
            max-width: 100%;
            border-radius: 0;
          }
          
          .line-decorator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};