import React from 'react';
// Importamos el Header (fíjate en las llaves porque es un export nombrado)
import { HomeHeader } from '../components/Home/Hero';
import SocialCards from '../components/About/SocialCards';
import CompanyStats from '../components/About/CompanyStats';
import Certifications from '../components/About/Certifications';
import Pilares from '../components/About/Pilares';

const About = () => {
  return (
    <main className="about-page">
      {/* 1. Header personalizado para "Quiénes Somos" */}
      <HomeHeader 
        title="Somos KAI Consultoría"
        subtitle="En KAI Consultoría combinamos años de experiencia estratégica con una visión humana y sólida para transformar negocios."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" // Imagen de ejemplo editorial
        imageId="ABOUT-01"
      />

      {/* 2. Sección de Redes Sociales / Colaboradores */}
      <SocialCards />
      <CompanyStats />
      <Certifications />
      <Pilares />

    </main>
  );
};

export default About;