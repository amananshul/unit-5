const mongoose = require('mongoose')

//Movie schema
const MovieSchema = new mongoose.Schema({
    "rating": "String",
    "id": Number,
    "image_url":"String",
    "name": "String",
    "price":Number,
    "strikedoffprice": Number,
    "brand":"String",
    "category": "String",
    "qnty": Number,
    "description":"String"

})

module.exports = new mongoose.model('Movie',MovieSchema)