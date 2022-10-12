const mongoose = require("mongoose")

const conexion = async() => {
    try {
        mongoose.connect("mongodb+srv://Deelyn:Another7w7@cluster0.gvosnso.mongodb.net/parcial?retryWrites=true&w=majority")
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(error, "Salió mal")
    }
}

module.exports = conexion