import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'
import Logo from '../assets/image/Logo.jpeg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img
          src={Logo}
          alt="KAI Logo"
          className="navbar__logo-img"
        />
      </div>

      {/* Botón hamburguesa */}
      <button
        className="navbar__toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navegación */}
      <nav className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="navbar__close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <NavLink to="/" onClick={closeMenu}>
          Inicio
        </NavLink>

        <NavLink to="/quienes-somos" onClick={closeMenu}>
          Quiénes Somos
        </NavLink>

        <NavLink to="/experience-park" onClick={closeMenu}>
          Experience Park
        </NavLink>

        <NavLink to="/training-bmp" onClick={closeMenu}>
          Training BMP
        </NavLink>

        <NavLink to="/spots-media" onClick={closeMenu}>
          Spots & Media
        </NavLink>

        <NavLink to="/contacto" onClick={closeMenu}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
