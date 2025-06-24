import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductTable from '../components/ProductTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/products');
                if (!res.ok) throw new Error('Error en la respuesta');
                const data = await res.json();

                setProducts(data.products);
                setCount(data.totalProducts);
            } catch (error) {
                console.error('Error', error);
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

        try {
            const res = await fetch(`http://localhost:3000/products/${id}/delete`, {
                method: 'DELETE'
            });
           
            if (res.ok) {
                alert('Producto eliminado correctamente');
                setProducts(prev => prev.filter(product => product.id !== id));
            }
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    return (
        <>
            <Header />
            <main className="product-list-container">
                <h1>Sección Productos</h1>
                <h4>La cantidad de productos cargados es de:</h4>
                <p className="count">{count}</p>

                <button onClick={() => navigate('/crear-producto')}>Crear Producto</button>

                <ProductTable products={products} onDelete={handleDelete} />
            </main>
            <Footer />
        </>
    );
}