import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <FormInput
      product={ null } 
      categories={categories}
      onSubmit={handleSubmit}
    />
  );
}
