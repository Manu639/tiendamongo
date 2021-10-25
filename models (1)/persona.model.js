const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
})

personaSchema.virtual('nombreCompleto').get(function () {
    return this.nombre + ' ' + this.apellidos;
})

personaSchema.virtual('nombreCompleto').set(function (newValue) {
    const arr = value.spli(" ");
    this.nombre = arr[0];
    this.apellido = arr[1];
})


module.exports = mongoose.model('persona', personaSchema)


