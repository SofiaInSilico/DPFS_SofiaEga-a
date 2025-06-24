import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Login({ passConfirm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log('Respuesta del backend:', data);

            if (!response.ok) {
                alert(data.message || 'Login fallido');
                return;
            }

            localStorage.setItem('user', JSON.stringify(data.user));
            alert(data.message);
            navigate('/dashboard');

        } catch (error) {
            console.error('Error en login', error);
            alert('Error de red o servidor');
        }
    };

    return (
        <>
            <Header />
            <section className="login-section">
                <div className="form-container">
                    <h1>INICIO DE SESIÓN</h1>
                    <h2>Por favor ingresa tus datos</h2>
                    <form onSubmit={handleLogin} autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="extras">
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                />
                                <label htmlFor="remember">Recordar usuario</label>
                            </div>
                            <a href="#" className="forgot-password">Olvidé la contraseña</a>
                        </div>
                        <button type="submit" className="submit-button">INGRESAR</button>
                        <button type="button" className="google-button">INGRESAR CON GOOGLE</button>
                        <p className="register-link">
                            ¿No tienes una cuenta? <Link to="/register">¡Regístrate!</Link>
                        </p>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}