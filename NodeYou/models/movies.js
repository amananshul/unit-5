const mongoose = require('mongoose')
const Producer=require('./producer')

//Movie schema
const MovieSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        minLength:3, 
        maxLength:70,
    },
    producer:Producer.schema,
    genre:{ 
        type: 'string',
        required: true,
        minLength:4, 
        maxLength:50,
    },

})

module.exports = new mongoose.model('Movie',MovieSchema)