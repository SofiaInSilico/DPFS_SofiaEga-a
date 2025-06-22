import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "./FormInput";

export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const resProduct = await fetch(`http://localhost:3000/products/product/${id}`);
                const data = await resProduct.json();
                console.log('productos en fetchData editProduct', data);
                setProduct(data);

                const resCategory = await fetch('http://localhost:3000/categories');
                const categoryData = await resCategory.json();
                console.log(categoryData);
                setCategories(categoryData);
            } catch (error) {
                console.error('Error al cargar productos o categorías', error);
            };
        };
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
        };
    };

    return (
        <FormInput product={product} categories={categories} onSubmit={handleSubmit} />
    )

}