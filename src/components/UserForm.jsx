import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ onSubmit, initialData = null, onClose }) => {
  const formik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Debe tener 50 caracteres o menos")
        .required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Formato de email no válido")
        .required("El email es obligatorio"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="user-form">
      <h2>{initialData ? "Editar Usuario" : "Crear Nuevo Usuario"}</h2>

      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Ej: John Doe"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="validation-error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Ej: john.doe@example.com"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="validation-error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button type="submit" className="button button-primary">
          {initialData ? "Guardar Cambios" : "Crear Usuario"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
