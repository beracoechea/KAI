import React from 'react';

export const ModalForm = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>{title}</h3>
          <button className="close-x" onClick={onClose}>&times;</button>
        </header>
        
        <div className="modal-body">
          {children}
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          width: 100%;
          max-width: 550px;
          border-radius: var(--radius-lg, 12px);
          box-shadow: 0 20px-50px rgba(0,0,0,0.3);
          overflow: hidden;
          animation: modalSlideUp 0.3s ease-out;
        }

        @keyframes modalSlideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
          padding: 20px 30px;
          background: #f8f9fa;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          margin: 0;
          color: var(--color-primary, #1a237e);
          font-size: 1.25rem;
        }

        .close-x {
          background: none;
          border: none;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          color: #999;
          transition: color 0.2s;
        }

        .close-x:hover { color: #333; }

        .modal-body {
          padding: 30px;
        }
      `}</style>
    </div>
  );
};