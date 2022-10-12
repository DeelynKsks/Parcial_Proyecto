const express = require ("express")

require ("dotenv").config()

const morgan = require ("morgan")

const path = require ("path")

const cors = require ("cors")

const app = express()

app.use(express.json())

const database = require("./connection")

database()

app.use(require("./src/routes/user.routes"))

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}`)
})
