require ("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const morgan = require ("morgan")

const database = require("./connection")

const app = express()
database()

const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(require("./src/routes/user.routes"))
app.use(require("./src/routes/task.routes"))
app.use(require("./src/routes/auth.routes"))

app.listen(port, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}`)
})