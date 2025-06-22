import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserTable from '../components/UserTable';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState();

    useEffect(() => {
        console.log('useEffect sí funciona')
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/users');
                const data = await res.json();
                
      setUsers(data.users);
      setCount(data.totalUsers);
            } catch (error) {
                console.error('Error', error);
            }
        }
        fetchData();

    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de eliminar este usuario?')) return;

        try {
            const res = await fetch(`http://localhost:3000/users/user/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                alert('Usuario eliminado correctamente');
                setUsers(prev => prev.filter(user => user.id !== id));
            }
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    return (
        <>
            <Header />
            <div>
                <h1>Lista de Usuarios</h1>
                <h4>La cantidad de usuarios registrados es de:</h4>
                <p>{count}</p>
            </div>
            <UserTable users={users} onDelete={handleDelete} />
            <Footer />
        </>
    )
}