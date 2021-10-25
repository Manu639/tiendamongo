const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    departamento: String,
    activo: Boolean
})

productoSchema.virtual('precioIva').get(function () {
    return this.precio + this.precio * 0.21;
})

productoSchema.methods.mismoDepartamento = function () {
    return this.model('producto').find({ departamento: this.departamento })
}

productoSchema.statics.activos = function () {
    return this.model('producto').find({ activo: true })
}

module.exports = mongoose.model('producto', productoSchema)

