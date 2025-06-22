import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        role: 'user'
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error('Error en la respuesta');

            await res.json();

            if (res.ok) {
                alert('Ahora puede ingresar a su usuario');
                navigate('/login');
                
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    address: '',
                    password: '',
                    confirmPassword: '',
                    role: 'user'
                });
            };
        } catch (error) {
            console.error('Error', error);
        }
    }

    return (
        <>
            <Header />
            <section className="create-user">

                <div className="form-container">
                    <h1>Registrarse</h1>
                    <h2>Por favor ingresa tus datos</h2>
                    <form onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre(s)</label>
                                <input type="text" id="nombre" name='first_name' value={formData.first_name} onChange={handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellido(s)</label>
                                <input type="text" id="apellidos" name="last_name" value={formData.last_name} onChange={handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección</label>
                                <input type="text" id="direccion" name="address" value={formData.address} onChange={handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Repetir Contraseña</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="terms">
                            <input type="checkbox" id="terms" name="terms" required></input>
                            <label htmlFor="terms">Acepto los términos y condiciones de Camanchaca</label>
                        </div>
                        <button type="submit" className="submit-button">Registrarse</button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};