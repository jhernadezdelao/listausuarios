import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  addNewUser,
  updateUser,
  deleteUser,
  selectAllUsers,
  selectUsersStatus,
  selectUsersError,
} from "../features/users/usersSlice";
import UserList from "../features/users/UserList";
import Modal from "../components/Modal";
import UserForm from "../components/UserForm";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const userStatus = useSelector(selectUsersStatus);
  const error = useSelector(selectUsersError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  const handleOpenModal = (user = null) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSaveUser = (userData) => {
    if (currentUser) {
      dispatch(updateUser({ ...userData, id: currentUser.id }));
    } else {
      dispatch(addNewUser(userData));
    }
    handleCloseModal();
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      dispatch(deleteUser(userToDelete));
      setUserToDelete(null);
    }
  };

  let content;

  if (userStatus === "loading") {
    content = <p>"Cargando usuarios..."</p>;
  } else if (userStatus === "succeeded") {
    content = (
      <UserList
        users={users}
        onEdit={handleOpenModal}
        onDelete={setUserToDelete}
      />
    );
  } else if (userStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <button onClick={() => handleOpenModal()}>Crear Usuario</button>

      {content}

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <UserForm
            onSubmit={handleSaveUser}
            initialData={currentUser}
            onClose={handleCloseModal}
          />
        </Modal>
      )}

      {userToDelete && (
        <Modal onClose={() => setUserToDelete(null)}>
          <div className="confirmation-modal-content">
            <h2>Confirmar Eliminación</h2>
            <p>
              ¿Estás seguro de que quieres eliminar a{" "}
              <strong>{userToDelete.name}</strong>? Esta acción no se puede
              deshacer.
            </p>
            <div className="form-actions">
              <button
                onClick={() => setUserToDelete(null)}
                className="button button-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="button button-danger"
              >
                Sí, Eliminar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DashboardPage;
