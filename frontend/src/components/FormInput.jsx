import React, { useState, useEffect } from 'react';

export default function FormInput({ product, categories, onSubmit }) {
    console.log('categoría en formInput', categories);
    console.log('producto en formInput',product)

      const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price || '');
  const [stock, setStock] = useState(product?.stock || '');
  const [categoryId, setCategoryId] = useState(product?.category_id || '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    setName(product?.name || '');
    setPrice(product?.price || '');
    setStock(product?.stock || '');
    setCategoryId(product?.category_id || '');
    setImage(product?.image || '');
  }, [product]);

    const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('stock', stock);
  formData.append('category_id', categoryId);

  if (image) {
    formData.append('image', image); 
  }

  onSubmit(formData); 
};

    return (
        <div className="container"><h2>{product ? 'Editar producto' : 'Cargar Nuevo producto'}</h2>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                
                <label htmlFor="name">Nombre del producto:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label htmlFor="image">Imagen:</label>
                <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
                <img src={`images/${image}`} alt={`imagen de ${name}`} width="100" />
                
                <label htmlFor="category">Categoría:</label>
                <select id="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                    <option value="">Seleccione una categoría</option>
                    {categories.map(cat => (
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                    ))
                    }
                </select>
                
                <label htmlFor="price">Precio:</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                
                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                
                <button type="submit">{product ? 'Actualizar producto' : 'Crear producto'}</button>
            </form>
        </div>

    );
};