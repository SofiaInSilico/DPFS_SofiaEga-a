import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import bgImage from '../assets/images/bullet-journal-colorido-y-sobrecargado.jpg';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/products');
                if (!res.ok) throw new Error('Error en la respuesta');
                const data = await res.json();
                console.log('Productos recibidos:', data.products);
                setProducts(data.products);
            } catch (error) {
                console.error('Error', error);
            }
        }
        fetchData();

    }, []);

    return (
        <>
            <Header />
            <section className="landing-page"
            style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="hero-content">
                    <h1>Bienvenidx a Camanchaca Encuadernaciones!</h1>
                    <p>Agendas especializadas.</p>
                </div>
            </section>
            <section className="product-cards">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
            <Footer />
        </>
    );
}