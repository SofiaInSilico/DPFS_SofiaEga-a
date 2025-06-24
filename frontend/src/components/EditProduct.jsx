import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "./FormInput";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const resProduct = await fetch(`http://localhost:3000/products/product/${id}`);
                const data = await resProduct.json();
                setProduct(data);

                const resCategory = await fetch('http://localhost:3000/categories');
                const categoryData = await resCategory.json();
                setCategories(categoryData);
            } catch (error) {
                console.error('Error al cargar productos o categorías', error);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (formData) => {
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`, {
                method: 'PUT',
                body: formData, // contiene texto + archivo
            });
            if (res.ok) {
                alert('Producto editado correctamente');
                navigate('/products');
            } else {
                alert('No se pudo editar el producto');
            }
        } catch (error) {
            console.error('Error al editar producto', error);
        }
    };

    return (
        <>
            <Header />
            <section className="edit-product-container">
                <h1>Editar Producto</h1>
                {product && (
                    <FormInput product={product} categories={categories} onSubmit={handleSubmit} />
                )}
            </section>
            <Footer />
        </>
    );
}