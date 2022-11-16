const { model, Schema } = require('mongoose')

const CoordsSchema = new Schema({
    lat: {
        type: Array,
        length: 2
    }
})

module.exports = model("Coordenadas", CoordsSchema)