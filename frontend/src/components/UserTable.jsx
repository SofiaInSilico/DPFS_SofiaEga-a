export default function UserTable({ users, onDelete }) {
  return (
    <section className="user-table-container">
      <h1>Lista de Usuarios</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo electrónico</th>
            <th>Dirección</th>
            <th>Rol</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.rol}</td>
              <td className="actions">
                <button className="edit-btn">Editar rol</button>
                <button className="delete-btn" onClick={() => onDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
