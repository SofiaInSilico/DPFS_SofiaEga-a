export default function ProductCard({ product }) {

  return (
    <div className="card me-3">
      <img src={`http://localhost:3000/images/${product.image}`} alt={product.name} className="img" />
      <div className="card-info">
        <h3>{product.name}</h3>
        <p>Agenda especializada, Universidad Nacional de las Artes.</p>
        <button className="btn-s">Ver más</button>
      </div>
    </div>
  );
};