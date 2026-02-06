import React from 'react';
import { HomeHeader } from '../components/Home/Hero';
import { InfoSection } from '../components/Home/InfoSection';
import TrainingPrograms from '../components/Training/TrainingPrograms';
import TrainingCallToAction from '../components/Training/TrainingCallToAction';

const TrainingBMP = () => {
  return (
    <main className="training-page">
      {/* Reutilizamos el Header Premium que ya optimizamos */}
      <HomeHeader 
        title="Training BMP"
        subtitle="Profesionalización y Tecnificación como pieza clave para el crecimiento de la cultura organizacional."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070" 
        imageId="TR-01"
      />

      {/* Introducción basada en tu código de Wix */}
      <InfoSection 
        sideTitle="Transformación Industrial"
        description="La 5ta Transformación y el Cambio Generacional de Talento ya están aquí. Estamos listos para guiar tu transición."
        infoImg="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
        imageId="TR-02"
      />

      {/* Listado de programas */}
      <TrainingPrograms />

      {/* Llamada a la acción final */}
      <TrainingCallToAction />
    </main>
  );
};

export default TrainingBMP;