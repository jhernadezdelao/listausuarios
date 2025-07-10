# React CRUD - Aplicación de Gestión de Usuarios

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.5-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite)

Esta es una aplicación web completa de tipo **CRUD (Crear, Leer, Actualizar, Eliminar)** para la gestión de usuarios. Fue desarrollada con React y Redux Toolkit, siguiendo las mejores prácticas de desarrollo de software para asegurar un código limpio, escalable, fácil de entender y mantenible.

El proyecto incluye un sistema de autenticación simulado.

---

## ✅ Características Principales

- **Autenticación de Usuarios**: Pantalla de login con validación de credenciales (simulada).
- **Rutas Protegidas**: Solo los usuarios autenticados pueden acceder al panel de gestión.
- **Listado de Usuarios (Read)**: Muestra una lista de usuarios obtenidos desde una API REST.
- **Creación de Usuarios (Create)**: Formulario en un modal para añadir nuevos usuarios.
- **Actualización de Usuarios (Update)**: Edita la información de un usuario existente.
- **Eliminación de Usuarios (Delete)**: Elimina un usuario con un diálogo de confirmación.
- **Gestión de Estado Centralizada**: Uso de **Redux Toolkit** para un manejo de estado predecible y eficiente.
- **Validación de Formularios**: Implementada con **Formik** y **Yup** para una mejor experiencia de usuario.
- **Pruebas Unitarias**: Tests con **Vitest** y **React Testing Library** para componentes y lógica de Redux.
- **Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla (móvil, tablet, escritorio).
- **Permisos Básicos**: Simulación de lógica de permisos (un usuario solo puede eliminar los registros que ha creado).

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - [React 18](https://reactjs.org/)
  - [Vite](https://vitejs.dev/) como empaquetador y servidor de desarrollo.
- **Gestión de Estado**:
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React-Redux](https://react-redux.js.org/)
- **Routing**:
  - [React Router DOM v6](https://reactrouter.com/)
- **Peticiones HTTP**:
  - [Axios](https://axios-http.com/)
- **Formularios**:
  - [Formik](https://formik.org/) para el manejo de formularios.
  - [Yup](https://github.com/jquense/yup) para la validación de esquemas.
- **Testing**:
  - [Vitest](https://vitest.dev/) como framework de pruebas.
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - `jsdom` para simular el entorno del navegador.
- **Estilos**:
  - CSS plano con una arquitectura modular y buenas prácticas.
  - [React Icons](https://react-icons.github.io/react-icons/) para los iconos.

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura de carpetas modular y escalable, diseñada para separar responsabilidades y facilitar la navegación.

```
src/
├── api/                # Lógica de llamadas a la API (servicios)
├── app/                # Configuración de Redux (store, hooks)
├── components/         # Componentes reutilizables (Modal, Layout, etc.)
├── features/           # Lógica de negocio (Slices de Redux y componentes asociados)
│   ├── auth/           # Lógica de autenticación
│   └── users/          # Lógica del CRUD de usuarios
├── pages/              # Componentes que representan una página completa
├── routes/             # Configuración de rutas y componentes de protección
├── styles/             # Estilos globales
├── utils/              # Funciones de utilidad (ej. para tests)
├── App.jsx             # Componente raíz de la aplicación
├── main.jsx            # Punto de entrada de la aplicación
└── setupTests.js       # Configuración inicial para Vitest
```

---

## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- `npm` o `yarn`

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/jhernadezdelao/listausuarios.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd mi-app-crud
    ```

3.  **Instala las dependencias:**

    ```bash
    npm install
    ```

    _o si usas yarn:_

    ```bash
    yarn install
    ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique).

### Credenciales de Prueba

Para iniciar sesión, utiliza las siguientes credenciales simuladas:

- **Email**: `user@example.com`
- **Contraseña**: `password123`

---

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
- `npm test`: Ejecuta las pruebas unitarias con Vitest.
- `npm run preview`: Sirve la build de producción localmente para previsualizarla.

---

## 🌐 API Utilizada

Este proyecto utiliza el API público [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para las operaciones CRUD de usuarios.

- `GET /users` - Obtiene la lista de usuarios.
- `POST /users` - Crea un nuevo usuario.
- `PUT /users/:id` - Actualiza un usuario.
- `DELETE /users/:id` - Elimina un usuario.

**Nota**: JSONPlaceholder simula las peticiones `POST`, `PUT` y `DELETE` y siempre devuelve una respuesta exitosa, pero no modifica su base de datos real.

---

## 📄 URL demo

https://luxury-granita-ae3565.netlify.app

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
