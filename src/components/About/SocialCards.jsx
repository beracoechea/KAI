import React from 'react';
import '../../styles/SocialCards.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const teamMembers = [
  {
    id: 1,
    name: "Karen Cordova",
    role: "Consultora de Estrategia",
    description: "Especialista en transformación digital y optimización de flujos de trabajo corporativos.",
    linkedin: "#",
    instagram: "#",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Especialista en Procesos",
    description: "Enfocado en metodologías ágiles y mejora continua para potenciar la eficiencia operativa.",
    linkedin: "#",
    instagram: "#",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  }
];

const SocialCards = () => {
  return (
    <section className="social-section">
      <div className="container">
        <div className="social-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              
              <div className="member-card__image-area">
                <img src={member.image} alt={member.name} className="member-img" />
                {/* La ola solo se activa en móvil via CSS */}
                <div className="mobile-wave">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-0.56,60.69 C155.18,162.33 335.21,-45.88 502.82,80.42 L500.00,150.00 L0.00,150.00 Z"></path>
                  </svg>
                </div>
              </div>

              <div className="member-card__content">
                <span className="member-role-tag">{member.role}</span>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-desc">{member.description}</p>
                
                <div className="member-socials">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                    <FaLinkedin /> <span>LinkedIn</span>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="social-icon">
                    <FaInstagram /> <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCards;