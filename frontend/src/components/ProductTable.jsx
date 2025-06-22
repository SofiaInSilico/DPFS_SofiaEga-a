import { useNavigate } from 'react-router-dom';
export default function ProductTable({ products, onDelete }) {
    const navigate = useNavigate();

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Stock</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.category?.name || 'Sin categoría'}</td>
                        <td>{product.price}</td>
                        <td>{product.image}</td>
                        <td>{product.stock}</td>
                        <td>
                            <button onClick={() => navigate(`/editar-producto/${product.id}`)}>
                                Editar producto
                            </button>
                            <button onClick={() => { onDelete(product.id) }}>Eliminar Producto</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}