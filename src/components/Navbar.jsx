import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/image/Logo.jpeg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="ED Institute Logo"
            className="navbar__logo-img"
          />
        </NavLink>
      </div>

      {/* Botón hamburguesa - Visible solo en móvil */}
      <button
        className="navbar__toggle"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navegación - Overlay en móvil, Fila en Desktop */}
      <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="navbar__close"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>

        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Quiénes Somos
        </NavLink>

        <NavLink to="/experience-park" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Experience Park
        </NavLink>

        <NavLink to="/training-bmp" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Training BMP
        </NavLink>
      </nav>
      
      {/* Fondo oscuro detrás del menú para mayor enfoque (Opcional) */}
      {menuOpen && <div className="navbar__overlay-bg" onClick={closeMenu}></div>}
    </header>
  )
}

export default Navbar