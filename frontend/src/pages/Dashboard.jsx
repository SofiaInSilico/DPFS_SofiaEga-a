import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (!storedUser) {
            alert("Debes iniciar sesión nuevamente");
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    if (!user) return null;

    return (
        <>
            <Header />
            <section className='dashboard'>
                <h1>Bienvenidx, {user.name}</h1>


                {user.role === 'admin' ? (
                    <div>
                        <h2>Panel de Administrador</h2>
                         <Link to='/products'>Ver productos</Link>
                         <Link to='/users'>Ver usuarios</Link>
                    </div>
                ) : (
                    <div>
                        <h2>Panel de Cliente</h2>
                        <ul>
                            <li>Ver mis compras</li>
                            <li>Crear productos</li>
                            <li>Actualizar mis datos</li>
                        </ul>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};