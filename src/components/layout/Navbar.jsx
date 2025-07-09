import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  logout,
  selectIsAuthenticated,
  selectUser,
} from "../../features/auth/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Seleccionamos los datos que necesitamos del store de Redux
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  /**
   * Maneja el cierre de sesión del usuario.
   * Despacha la acción `logout` y redirige al usuario a la página de login.
   */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ejercicio FontEnd
        </Link>

        {isAuthenticated && user ? (
          <div className="navbar-menu">
            <span className="navbar-welcome">Hola, {user.name}!</span>
            <button onClick={handleLogout} className="navbar-button">
              Cerrar Sesión
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
