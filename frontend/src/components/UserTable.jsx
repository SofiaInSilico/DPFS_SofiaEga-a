export default function UserTable({users, onDelete}) {
  console.log('quiero saber qué pasa con: ', users);
  return (
    <table>
      <thead>
        <th>#</th>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo electrónico</th>
        <th>Dirección</th>
        <th>Rol</th>
        <th>Acción</th>
      </thead>
      <tbody>
        {
          users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.rol}</td>
              <td>
                <button>Editar rol usuario</button>
                <button onClick={() => onDelete(user.id)}>Eliminar usuario</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};