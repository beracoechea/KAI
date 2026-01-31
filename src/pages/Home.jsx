// views/Home.jsx
import { HomeHeader } from '../components/Home/Hero';
import { InfoSection } from '../components/Home/InfoSection';
import { TestSection } from '../components/Home/TestSection';
import { Services } from '../components/Home/Services';
import { LeanSection } from '../components/Home/LeanSection';
// 1. Importas la imagen con un nombre (ej. heroImg)
import heroImg from '../assets/image/Logo.jpeg'; 

function Home() {
  return (
    <main>
      <HomeHeader 
        title="Innovación en cada trazo"
        subtitle="Transformamos conceptos complejos en identidades visuales potentes y memorables para el mercado actual."
        // 2. La pasas entre llaves como una variable
        imageUrl={heroImg} 
      />
      
      <InfoSection 
        mainTitle="Nuestra Metodología"
        sideTitle="Diseño basado en datos"
        description="No solo creamos logos; construimos sistemas visuales que respiran con tu marca. Nuestro enfoque combina la estética clásica con las necesidades digitales del 2026."
        infoImg={heroImg}
      />
      <TestSection />
      <Services />
      <LeanSection />
    </main>
  );
}

export default Home;