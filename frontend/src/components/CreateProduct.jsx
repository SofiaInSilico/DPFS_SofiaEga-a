import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from './FormInput';

export default function CreateProduct() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('http://localhost:3000/categories');
        const data = await res.json();
        setCategories(data); 
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    }

    fetchCategories();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        alert('Producto creado exitosamente');
        navigate('/products');
      } else {
        alert('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error al enviar el producto:', error);
    }
  };

  return (
    <>
      <Header />
      <section className="create-product-container">
        <h1>Crear Producto</h1>
        <FormInput
          product={null} 
          categories={categories}
          onSubmit={handleSubmit}
        />
      </section>
      <Footer />
    </>
  );
}
