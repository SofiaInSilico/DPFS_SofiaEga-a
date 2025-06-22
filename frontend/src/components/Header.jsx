import { Link } from 'react-router-dom';
import camanchacaImage from '../assets/images/Camanchaca.jpg';

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/"><img className="imagen_redonda" src={camanchacaImage} alt="Logo"/></Link>
            <div className="nav-buttons">
                <Link to='/'>Misión y Visión</Link>
                <Link to='/'>Accesorios</Link>
                <Link to='/'>Agendas</Link>
            </div>
            <div className="auth-buttons">
                <Link to='/register'>Registrarse</Link>
                <Link to='/login' className="login-button">Iniciar Sesión</Link>
            </div>
        </nav>
    );
}