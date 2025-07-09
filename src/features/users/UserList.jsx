import { useSelector } from "react-redux";
import { selectUser } from "../auth/authSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserList = ({ users, onEdit, onDelete }) => {
  const loggedInUser = useSelector(selectUser);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {/* solo puedes editar/eliminar tus propios datos
               */}
              <button onClick={() => onEdit(user)} className="icon-button">
                <FaEdit />
              </button>
              {loggedInUser?.id === user.id || user.id > 10 ? ( // Solo permite eliminar los creados por nosotros o nuestro propio usuario
                <button
                  onClick={() => onDelete(user.id)}
                  className="icon-button danger"
                >
                  <FaTrash />
                </button>
              ) : (
                <button
                  className="icon-button"
                  disabled
                  title="No puedes eliminar usuarios base"
                >
                  <FaTrash />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
