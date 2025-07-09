import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  loginUser,
  selectAuthStatus,
  selectIsAuthenticated,
  selectAuthError,
} from "../features/auth/authSlice";

import "./LoginPage.css"; // ¡Importa el nuevo archivo CSS!

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);

  const from = location.state?.from?.pathname || "/";

  // Redirige si el usuario ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  // Configuración de Formik con el esquema de validación Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de email inválido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Bienvenido</h2>
          <p>Inicia sesión para continuar</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="tu@email.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="validation-error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              placeholder="••••••••"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="validation-error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={authStatus === "loading"}
          >
            {authStatus === "loading" ? (
              <div className="spinner"></div>
            ) : (
              "Iniciar Sesión"
            )}
          </button>

          {/* Muestra el error de la API (ej: credenciales incorrectas) */}
          {authStatus === "failed" && authError && (
            <div className="form-error">{authError}</div>
          )}
        </form>

        <div className="login-footer">
          <p>
            <strong>Credenciales de prueba:</strong>
            <br />
            Email: <code>user@blackmamba.com</code>
            <br />
            Contraseña: <code>password123</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
