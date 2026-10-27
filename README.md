# fundamentos-express

Laboratorio 4 de Desarrollo de Aplicaciones Web (EPN-ESFOT): Introducción a Express. Cada tema de "Fundamentos de Express" se adaptó a un caso de la vida real: una **tienda de tecnología llamada TechStore**.

## Temas

| Tema | Dónde |
| --- | --- |
| Servidor básico | `index.js` (`app.listen`, `GET /`) |
| Rutas y métodos HTTP | `index.js` (`GET`, `POST`) |
| Request (`body`, `params`, `query`) | `index.js` (`req.body`, `req.params`, `req.query`) |
| Response (`send`, `json`, `sendFile`, `status`) | `index.js` |
| Middleware | `index.js` (`express.json()`, middleware de token) |
| Respuestas de texto | `index.js` (`GET /productos`) |
| Respuestas en formato JSON | `index.js` (`GET /producto`) |
| Envío de imágenes | `public/` + `res.sendFile()` |
| Respuestas HTML | `index.js` (`GET /catalogo`) |
| Manejo de errores 404 | `index.js` |
| Rutas públicas y protegidas | `index.js` (`/ofertas`, `/administracion`) |
| Autenticación mediante token | `index.js` (`token: tech123`) |

## Cómo ejecutarlo

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/` | Mensaje de bienvenida de TechStore |
| GET | `/laptops` | Muestra un mensaje sobre las laptops disponibles |
| POST | `/pedido` | Registra un pedido utilizando `req.body` |
| POST | `/producto/:categoria` | Consulta una categoría mediante `req.params` |
| POST | `/buscar?marca=lenovo` | Busca productos mediante `req.query` |
| GET | `/productos` | Muestra el listado de productos en formato texto |
| GET | `/producto` | Devuelve información de un producto en formato JSON |
| GET | `/imagen-laptop` | Muestra la imagen de una laptop |
| GET | `/catalogo` | Muestra un catálogo de productos en formato HTML |
| GET | `/ofertas` | Accede a la sección pública de ofertas |
| GET | `/administracion` | Accede al panel protegido mediante token |
| GET | `/ruta-inexistente` | Ejemplo para comprobar el manejo de errores 404 |

## Token de acceso

La ruta `/administracion` está protegida mediante un middleware que verifica un token enviado en los headers de la petición.

```text
token: tech123
```

Si el token es correcto, el middleware permite continuar con `next()` y acceder a la ruta protegida.

## Autores

Francisco Lanche | Damián Cadavid | Cristopher Balseca
