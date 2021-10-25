const router = require('express').Router();
const Producto = require('../../models/producto.model')

router.get('/', async function (req, res, next) {
    Producto.find()
        .then(
            productos => res.json(productos))
        .catch((error) => console.log(error.message))
});

router.get('/mismodepartamento', async function (req, res, next) {
    let productos = await Producto.find();
    let producto = productos[0]
    let filtrados = await producto.mismoDepartamento();
    res.json(filtrados);
});

router.get('/activos', async function (req, res, next) {
    let activos = await Producto.activos();
    res.json(activos);
});

router.get('/:departamento', async function (req, res, next) {
    Producto.find
        ({ departamento: req.params.departamento })
        .then(
            productos => res.json(productos))
        .catch((error) => console.log(error.message))
});

router.post('/', async function (req, res, next) {
    Producto.create(req.body)
        .then(
            producto => res.json(producto))
        .catch((error) => console.log(error.message))
});

router.put('/:productoId', async (req, res, next) => {
    const producto = await Producto.findByIdAndUpdate(req.params.productoId, req.body);
    res.json(producto);
})

router.delete('/:productoId', async (req, res, next) => {
    const producto = await Producto.findByIdAndDelete(req.params.productoId);
    res.json({ result: 'borrado correctamente', producto });
})

module.exports = router