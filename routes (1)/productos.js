const { response } = require('express');
const Productos = require('../models/producto.model');

const router = require('express').Router();

router.get('/', async (req, res, next) => {

    let productos = await Productos.find()

    res.render('../views/productos/index', { productos })
})

router.get('/edit/:productoId', async (req, res, next) => {
    let producto = await Productos.findById(req.params.productoId)

    res.render('../views/productos/edit', { producto })

})

router.post('/update/:productoId', async (req, res, next) => {

    const result = await Productos.findByIdAndUpdate(req.params.productoId, req.body)
    console.log(result)
    res.redirect('/productos')

})



module.exports = router