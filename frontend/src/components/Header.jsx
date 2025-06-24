import { useState } from 'react';
import { Link } from 'react-router-dom';
import camanchacaImage from '../assets/images/Camanchaca.jpg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/">
                <img className="imagen_redonda" src={camanchacaImage} alt="Logo" />
            </Link>

            {/* Botón hamburguesa */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <div className={`nav-content ${menuOpen ? 'open' : ''}`}>
                <div className="nav-buttons">
                    <Link to='/' className="nav-link">Misión y Visión</Link>
                    <Link to='/' className="nav-link">Accesorios</Link>
                    <Link to='/' className="nav-link">Agendas</Link>
                </div>

                <div className="auth-buttons">
                    <Link to='/register' className="register-button">Registrarse</Link>
                    <Link to='/login' className="login-button">Iniciar Sesión</Link>
                </div>
            </div>
        </nav>
    );
}