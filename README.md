# Curso de Backend – Platzi 🎯

Proyecto desarrollado durante el **Curso de Backend de Platzi**. Implementa una API REST básica utilizando **Node.js** y **Express**.

## 🛠️ Tecnologías usadas

- Node.js  
- Express  
- Joi (validación de datos)  
- @hapi/boom (manejo de errores)  
- Faker (datos de prueba)  
- Cors (habilitar CORS)

## 🚀 Endpoints

Base URL: `http://localhost:3000/api/v1`

### Categorías

| Método | Ruta                 | Descripción                        |
|--------|----------------------|----------------------------------|
| GET    | `/categories`        | Lista todas las categorías.       |
| GET    | `/categories/:id`    | Obtiene una categoría por ID.     |

---

### Productos

| Método | Ruta               | Descripción                                                                                           |
|--------|--------------------|-----------------------------------------------------------------------------------------------------|
| GET    | `/products`        | Lista todos los productos (simula un retardo de 2 segundos).                                        |
| GET    | `/products/:id`    | Obtiene un producto por ID. Retorna error 404 si no existe o 409 si el producto está bloqueado.     |
| POST   | `/products`        | Crea un producto nuevo. Se debe enviar JSON con: `name` (string), `price` (integer), `image` (URL).  |
| PATCH  | `/products/:id`    | Actualiza parcialmente un producto por ID. Valida ID y datos enviados.                              |
| DELETE | `/products/:id`    | Elimina un producto por ID.                                                                          |

---

### Usuarios

| Método | Ruta            | Descripción                                |
|--------|-----------------|--------------------------------------------|
| GET    | `/users`        | Retorna los parámetros `limit` y `offset` recibidos por query. |

---

## 📦 Instalación

1. Cloná el repositorio:
   git clone https://github.com/MatinSalomon/curso-de-backend-platzi.git
   
2. Entrá al directorio:
    cd curso-de-backend-platzi
3. Instalá las dependencias:
    npm install
3. Ejecutá la API:
    npm start

