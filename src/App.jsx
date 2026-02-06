import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import TrainingBMP from './pages/TrainingBMP'
// 1. Importamos el nuevo componente
import { FooterContact } from './components/FooterContact' 

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* El Navbar se mantiene arriba en todas las rutas */}
      <Navbar />

      {/* Contenedor principal que crece para empujar el footer hacia abajo */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/training-bmp" element={<TrainingBMP />} />
        </Routes>
      </main>

      {/* 2. El Footer se integra aquí para que sea global y siempre esté al final */}
      <FooterContact />
    </div>
  )
}

export default App