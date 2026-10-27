import express from "express"
import path from "path"

const app = express()

// La pagina principal presenta un mensaje de bienvenida a los clientes de una tienda de tecnologia

app.get("/", (req, res) => {
    res.send("Bienvenido a TechStore - Tienda de Tecnologia")
})


// Routes:
// El cliente puede consultar informacion sobre laptops

app.get("/laptops", (req, res) => {
    res.send("Laptops disponibles en TechStore 💻")
})

// REQUEST CON BODY
// Permite recibir informacion enviada en formato JSON

app.use(express.json())

// La información llega mediante req.body.

app.post("/pedido", (req, res) => {

    console.log(req.body)

    const { producto } = req.body

    res.send(`El pedido de ${producto} ha sido registrado correctamente`)
})

// REQUEST CON PARAMS
// El cliente consulta una categoria especifica utilizando un parametro en la URL

app.post("/producto/:categoria", (req, res) => {

    console.log(req.params)

    const { categoria } = req.params

    res.send(`La categoría seleccionada es: ${categoria}`)
})

// Ejemplo:
// http://localhost:3000/producto/laptops


// REQUEST CON QUERY PARAMS
// El cliente busca productos segun una marca

// Ejemplo:
// http://localhost:3000/buscar?marca=lenovo

app.post("/buscar", (req, res) => {

    console.log(req.query)

    const { marca } = req.query

    res.send(`Los productos buscados pertenecen a la marca: ${marca}`)
})


// 6. RESPONSE - TEXTO
// El servidor devuelve un mensaje indicando que existen productos disponibles

app.get("/productos", (req, res) => {

    res.send("Listado de productos disponibles en TechStore")
})


// RESPONSE - JSON
// Una aplicacion necesita recibir informacion estructurada de un producto

app.get("/producto", (req, res) => {

    res.json({
        id: 101,
        nombre: "Laptop Lenovo IdeaPad",
        precio: 650,
        stock: 8
    })

})


// RESPONSE - IMAGEN
// La tienda permite visualizar la imagen de uno de sus productos

app.get("/imagen-laptop", (req, res) => {

    res.sendFile(
        path.join(import.meta.dirname, "public", "laptop.png")
    )

})


// 9. RESPONSE - HTML
// El servidor genera una pequeña página con los productos de una tienda

app.get("/catalogo", (req, res) => {

    res.send(`
        <h1>Catálogo TechStore</h1>

        <ul>
            <li>Laptops</li>
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Audífonos</li>
            <li>Monitores</li>
        </ul>
    `)

})

// ERROR 404
// Si el cliente solicita una direccion que no existe, el servidor muestra un mensaje indicando el error

app.use((req, res) => {

    res.status(404).send("La página o producto solicitado no existe")

})

// MIDDLEWARE

// Un middleware es una función que se ejecuta entre la petición del cliente y la respuesta
// del servidor

// Ruta publica
// No necesita autenticación.

app.get("/ofertas", (req, res) => {

    res.send("Bienvenido a la seccion de ofertas de TechStore")

})

// MIDDLEWARE CON TOKEN

// Este middleware verifica si el cliente posee un token autorizado

app.use((req, res, next) => {

    const { token } = req.headers

    const response = token == "tech123" ? true : false

    response
        ? next()
        : res.send("Acceso denegado: necesitas un token válido")

})


// RUTA PROTEGIDA

// Esta sección solamente puede ser utilizada por clientes que tengan autorizacion

app.get("/administracion", (req, res) => {

    res.send("Bienvenido al panel de administración de TechStore")

})



app.listen(3000, () => {

    console.log("Servidor ejecutándose en http://localhost:3000")

})